const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>\"'&]/g, '').trim().slice(0, 500);
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método não permitido' 
    });
  }

  try {
    const { name, email, phone, company, message, service } = req.body;

    // Validação dos campos obrigatórios
    if (!name || !email || !phone || !company || !message) {
      return res.status(400).json({
        success: false,
        message: 'Todos os campos obrigatórios devem ser preenchidos'
      });
    }

    // Sanitização dos dados
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: sanitizeInput(company),
      message: sanitizeInput(message),
      service: sanitizeInput(service) || 'automacoes'
    };

    // Validação do email
    if (!validateEmail(sanitizedData.email)) {
      return res.status(400).json({
        success: false,
        message: 'E-mail inválido'
      });
    }

    // Log dos dados (temporário)
    console.log('📧 NOVO CONTATO RECEBIDO:', {
      timestamp: new Date().toISOString(),
      ...sanitizedData,
      userAgent: req.headers['user-agent']
    });

    return res.status(200).json({
      success: true,
      message: 'Mensagem recebida com sucesso! Entraremos em contato em breve.'
    });

  } catch (error) {
    console.error('❌ Erro no processamento do contato:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Erro interno do servidor. Tente novamente.'
    });
  }
}