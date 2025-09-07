import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
import path from 'path';
import { createHash } from 'crypto';

export const config = {
  api: {
    bodyParser: false,
  },
};

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>\"'&]/g, '').trim().slice(0, 500);
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

const getClientIP = (req) => {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.headers['x-real-ip'] || 
         req.connection?.remoteAddress || 
         req.socket?.remoteAddress ||
         'IP não disponível';
};

const logCareerSubmission = (careerData) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    ...careerData
  };
  
  console.log('💼 NOVA CANDIDATURA RECEBIDA:', JSON.stringify(logEntry, null, 2));
  
  return logEntry;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método não permitido' 
    });
  }

  try {
    // Parse form data with file upload
    const form = new IncomingForm({
      uploadDir: './uploads/resumes',
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB
      filter: ({ name, originalFilename, mimetype }) => {
        return name === 'resume' && mimetype && mimetype.includes('pdf');
      },
    });

    // Ensure upload directory exists
    const uploadDir = './uploads/resumes';
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    // Extract and validate fields
    const getName = (field) => Array.isArray(field) ? field[0] : field;
    
    const name = getName(fields.name);
    const email = getName(fields.email);
    const phone = getName(fields.phone);
    const position = getName(fields.position);
    const experience = getName(fields.experience);
    const linkedin = getName(fields.linkedin) || '';
    const github = getName(fields.github) || '';
    const portfolio = getName(fields.portfolio) || '';
    const message = getName(fields.message);

    // Validation
    if (!name || !email || !phone || !position || !experience || !message) {
      return res.status(400).json({
        success: false,
        message: 'Todos os campos obrigatórios devem ser preenchidos'
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'E-mail inválido'
      });
    }

    if (!validatePhone(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Telefone inválido'
      });
    }

    if (!files.resume) {
      return res.status(400).json({
        success: false,
        message: 'Currículo em PDF é obrigatório'
      });
    }

    // Sanitize data
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      position: sanitizeInput(position),
      experience: sanitizeInput(experience),
      linkedin: sanitizeInput(linkedin),
      github: sanitizeInput(github),
      portfolio: sanitizeInput(portfolio),
      message: sanitizeInput(message)
    };

    // Handle file
    const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;
    const originalFilename = resumeFile.originalFilename;
    const fileExtension = path.extname(originalFilename);
    
    // Generate unique filename
    const timestamp = Date.now();
    const hash = createHash('md5').update(sanitizedData.email).digest('hex').substring(0, 8);
    const newFilename = `${sanitizedData.name.replace(/[^a-zA-Z0-9]/g, '_')}_${hash}_${timestamp}${fileExtension}`;
    const newFilePath = path.join(uploadDir, newFilename);

    // Move file to final location
    await fs.rename(resumeFile.filepath, newFilePath);

    // Generate submission ID
    const submissionId = createHash('md5')
      .update(`${sanitizedData.email}-${timestamp}`)
      .digest('hex');

    const clientIP = getClientIP(req);
    
    const completeCareerData = {
      submissionId,
      ...sanitizedData,
      resumeFilename: newFilename,
      resumePath: newFilePath,
      metadata: {
        ip: clientIP,
        timestamp: new Date().toISOString(),
        browser: req.headers['user-agent'] ? req.headers['user-agent'].slice(0, 100) : 'N/A',
        fileSize: resumeFile.size,
        originalFilename
      }
    };

    logCareerSubmission(completeCareerData);

    // Position labels for better display
    const positionLabels = {
      'dev-python-ia': 'Desenvolvedor Python/IA',
      'especialista-automacao': 'Especialista em Automação',
      'designer-ux-ui': 'Designer UX/UI',
      'analista-dados': 'Analista de Dados',
      'outro': 'Outro'
    };

    const experienceLabels = {
      'junior': 'Júnior (0-2 anos)',
      'pleno': 'Pleno (3-5 anos)', 
      'senior': 'Sênior (5+ anos)',
      'especialista': 'Especialista/Líder técnico'
    };

    // Email content for notification
    const emailContent = `
💼 NOVA CANDIDATURA RECEBIDA - ${positionLabels[sanitizedData.position] || sanitizedData.position}

👤 DADOS DO CANDIDATO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Nome: ${sanitizedData.name}
• E-mail: ${sanitizedData.email}
• Telefone: ${sanitizedData.phone}
• Cargo: ${positionLabels[sanitizedData.position] || sanitizedData.position}
• Experiência: ${experienceLabels[sanitizedData.experience] || sanitizedData.experience}

🔗 LINKS PROFISSIONAIS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• LinkedIn: ${sanitizedData.linkedin || 'Não informado'}
• GitHub: ${sanitizedData.github || 'Não informado'}
• Portfolio: ${sanitizedData.portfolio || 'Não informado'}

💬 MENSAGEM DO CANDIDATO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${sanitizedData.message}

📄 CURRÍCULO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Arquivo: ${originalFilename}
• Tamanho: ${(resumeFile.size / 1024).toFixed(2)} KB
• Salvo como: ${newFilename}

📊 DADOS TÉCNICOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• ID da Submissão: ${submissionId}
• IP: ${clientIP}
• Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
• Navegador: ${req.headers['user-agent']?.slice(0, 50) || 'N/A'}

⚡ PRÓXIMOS PASSOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Analisar currículo e perfil
2. Verificar compatibilidade com vaga
3. Agendar entrevista se aprovado
4. Entrar em contato em até 5 dias úteis

🔗 LINKS RÁPIDOS:
• WhatsApp: https://wa.me/55${sanitizedData.phone.replace(/\D/g, '')}
• E-mail: mailto:${sanitizedData.email}
• LinkedIn: ${sanitizedData.linkedin || 'N/A'}
`;

    console.log(emailContent);

    return res.status(200).json({
      success: true,
      message: 'Candidatura enviada com sucesso!',
      submissionId: submissionId
    });

  } catch (error) {
    console.error('❌ Erro no processamento da candidatura:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Erro interno do servidor. Tente novamente ou envie por e-mail.'
    });
  }
}