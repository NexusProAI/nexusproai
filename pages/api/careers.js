import { tmpdir } from 'os';
import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
import { createHash } from 'crypto';
import { formRateLimit } from '../../lib/rate-limit';
import { sendCareerEmail } from '../../lib/email';

export const config = {
  api: { bodyParser: false },
};

const sanitizeText = (input, maxLen = 200) => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>"']/g, '').trim().slice(0, maxLen);
};

const validateEmail = (email) =>
  typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const validatePhone = (phone) =>
  typeof phone === 'string' &&
  /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''));

async function isPdfContent(filepath) {
  try {
    const fd = await fs.open(filepath, 'r');
    const buf = Buffer.alloc(5);
    await fd.read(buf, 0, 5, 0);
    await fd.close();
    return buf.toString('ascii') === '%PDF-';
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método não permitido' });
  }

  const origin = req.headers['origin'];
  const allowedOrigins = ['https://nexusproai.com.br', 'https://www.nexusproai.com.br'];
  if (process.env.NODE_ENV !== 'development' && origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ success: false, message: 'Acesso negado' });
  }

  try {
    await new Promise((resolve, reject) => {
      formRateLimit(req, res, (err) => (err ? reject(err) : resolve()));
    });
  } catch {
    return;
  }

  let tempFilePath = null;

  try {
    const form = new IncomingForm({
      uploadDir: tmpdir(),
      keepExtensions: false,
      maxFileSize: 5 * 1024 * 1024,
      filter: ({ name }) => name === 'resume',
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, f, fi) => (err ? reject(err) : resolve([f, fi])));
    });

    const get = (f) => (Array.isArray(f) ? f[0] : f) ?? '';

    const name       = get(fields.name);
    const email      = get(fields.email);
    const phone      = get(fields.phone);
    const position   = get(fields.position);
    const experience = get(fields.experience);
    const linkedin   = get(fields.linkedin);
    const github     = get(fields.github);
    const portfolio  = get(fields.portfolio);
    const message    = get(fields.message);

    if (!name || !email || !phone || !position || !experience || !message) {
      return res.status(400).json({ success: false, message: 'Campos obrigatórios faltando' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ success: false, message: 'E-mail inválido' });
    }
    if (!validatePhone(phone)) {
      return res.status(400).json({ success: false, message: 'Telefone inválido' });
    }
    if (!files.resume) {
      return res.status(400).json({ success: false, message: 'Currículo em PDF é obrigatório' });
    }

    const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;
    tempFilePath = resumeFile.filepath;

    const isValidPdf = await isPdfContent(tempFilePath);
    if (!isValidPdf) {
      return res.status(400).json({ success: false, message: 'O arquivo enviado não é um PDF válido' });
    }

    const sanitized = {
      name:       sanitizeText(name, 100),
      email:      email.trim().slice(0, 254),
      phone:      sanitizeText(phone, 20),
      position:   sanitizeText(position, 50),
      experience: sanitizeText(experience, 50),
      linkedin:   sanitizeText(linkedin, 200),
      github:     sanitizeText(github, 200),
      portfolio:  sanitizeText(portfolio, 200),
      message:    sanitizeText(message, 2000),
    };

    const timestamp = Date.now();
    const submissionId = createHash('sha256')
      .update(`${sanitized.email}-${timestamp}-career`)
      .digest('hex');

    const nameSlug = sanitized.name.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 40);
    const shortHash = submissionId.slice(0, 8);
    const safeFilename = `curriculo_${nameSlug}_${shortHash}.pdf`;

    const pdfBuffer = await fs.readFile(tempFilePath);

    await sendCareerEmail(sanitized, pdfBuffer, safeFilename);

    if (process.env.NODE_ENV === 'development') {
      console.log(`Career submission sent: ${submissionId}`);
    }

    return res.status(200).json({
      success: true,
      message: 'Candidatura enviada com sucesso!',
    });

  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Career API error:', error.message);
    }
    return res.status(500).json({
      success: false,
      message: 'Erro interno. Tente novamente ou envie por e-mail.',
    });
  } finally {
    if (tempFilePath) {
      await fs.unlink(tempFilePath).catch(() => {});
    }
  }
}
