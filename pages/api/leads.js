import { leadSchema, validateAndSanitize } from '../../lib/validation';
import { formRateLimit } from '../../lib/rate-limit';
import { sendLeadEmail } from '../../lib/email';

export default async function handler(req, res) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`API /api/leads - ${req.method} - ${new Date().toISOString()}`);
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const ct = req.headers['content-type'] || '';
  if (!ct.includes('application/json')) {
    return res.status(415).json({ error: 'Content-Type deve ser application/json' });
  }

  const origin = req.headers['origin'];
  if (process.env.NODE_ENV !== 'development' && origin && origin !== 'https://nexusproai.com.br') {
    return res.status(403).json({ error: 'Acesso negado' });
  }

  try {
    await new Promise((resolve, reject) => {
      formRateLimit(req, res, (err) => (err ? reject(err) : resolve()));
    });
  } catch {
    return;
  }

  const validation = validateAndSanitize(req.body, leadSchema);

  if (!validation.isValid) {
    return res.status(400).json({ error: 'Dados inválidos', errors: validation.errors });
  }

  try {
    await sendLeadEmail(validation.data);

    if (process.env.NODE_ENV === 'development') {
      console.log('Email enviado com sucesso');
    }

    return res.status(200).json({ success: true, message: 'Lead recebido com sucesso' });
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Erro Resend:', err?.message);
    }
    return res.status(500).json({ error: 'Erro ao enviar mensagem. Tente novamente.' });
  }
}
