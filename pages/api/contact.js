import { createHash } from 'crypto';
import { supabase } from '../../lib/supabase';

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

const getLocation = async (ip) => {
  try {
    if (ip === 'IP não disponível' || ip.includes('127.0.0.1') || ip.includes('::1')) {
      return 'Localização não disponível';
    }
    
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    
    if (data.status === 'success') {
      return `${data.city || 'N/A'}, ${data.regionName || 'N/A'}, ${data.country || 'N/A'}`;
    }
    
    return 'Localização não disponível';
  } catch (error) {
    console.error('Erro ao obter localização:', error);
    return 'Localização não disponível';
  }
};

const getTrafficSource = (req) => {
  const referer = req.headers.referer || req.headers.referrer || 'Direto';
  const userAgent = req.headers['user-agent'] || 'N/A';
  
  let source = 'Direto';
  
  if (referer !== 'Direto') {
    if (referer.includes('google')) source = 'Google';
    else if (referer.includes('facebook')) source = 'Facebook';
    else if (referer.includes('linkedin')) source = 'LinkedIn';
    else if (referer.includes('twitter')) source = 'Twitter';
    else if (referer.includes('instagram')) source = 'Instagram';
    else source = new URL(referer).hostname;
  }
  
  return {
    source,
    referer,
    userAgent: userAgent.slice(0, 200)
  };
};

const logContactSubmission = (contactData) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    ...contactData
  };
  
  console.log('📝 NOVO CONTATO SALVO NO SUPABASE:', JSON.stringify(logEntry, null, 2));
  
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
    const { name, email, phone, company, message, service } = req.body;

    if (!name || !email || !phone || !company || !message) {
      return res.status(400).json({
        success: false,
        message: 'Todos os campos obrigatórios devem ser preenchidos'
      });
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: sanitizeInput(company),
      message: sanitizeInput(message),
      service: sanitizeInput(service) || 'automacoes'
    };

    if (!validateEmail(sanitizedData.email)) {
      return res.status(400).json({
        success: false,
        message: 'E-mail inválido'
      });
    }

    if (!validatePhone(sanitizedData.phone)) {
      return res.status(400).json({
        success: false,
        message: 'Telefone inválido'
      });
    }

    const clientIP = getClientIP(req);
    const location = await getLocation(clientIP);
    const trafficData = getTrafficSource(req);

    // 🚀 SALVANDO NO SUPABASE
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          company: sanitizedData.company,
          message: sanitizedData.message,
          service: sanitizedData.service,
          ip: clientIP,
          location: location,
          traffic_source: trafficData.source,
          user_agent: trafficData.userAgent
        }
      ])
      .select();

    if (error) {
      console.error('❌ Erro ao salvar no Supabase:', error);
      return res.status(500).json({
        success: false,
        message: 'Erro ao salvar dados. Tente novamente.'
      });
    }

    const savedContact = data[0];
    logContactSubmission({
      id: savedContact.id,
      ...sanitizedData,
      metadata: {
        ip: clientIP,
        location,
        ...trafficData,
        timestamp: new Date().toISOString()
      }
    });

    const serviceLabels = {
      'automacoes': 'Automações Inteligentes',
      'analise-dados': 'Análise de Dados',
      'ia-processos': 'IA para Processos',
      'consultoria': 'Consultoria Estratégica',
      'outros': 'Outros'
    };

    const emailContent = `
📧 NOVO LEAD SALVO - ${serviceLabels[sanitizedData.service] || sanitizedData.service}

👤 DADOS DO CONTATO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• ID: ${savedContact.id}
• Nome: ${sanitizedData.name}
• E-mail: ${sanitizedData.email}
• Telefone: ${sanitizedData.phone}
• Empresa: ${sanitizedData.company}
• Interesse: ${serviceLabels[sanitizedData.service] || sanitizedData.service}

💬 MENSAGEM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${sanitizedData.message}

📊 DADOS DE ORIGEM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• IP: ${clientIP}
• Localização: ${location}
• Origem: ${trafficData.source}
• Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}

🎯 ACESSE O DASHBOARD: 
${process.env.NEXT_PUBLIC_SUPABASE_URL}/project/default/editor

⚡ PRÓXIMOS PASSOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Entrar em contato em até 2 horas
2. Qualificar a oportunidade
3. Agendar demonstração se qualificado

🔗 LINKS RÁPIDOS:
• WhatsApp: https://wa.me/55${sanitizedData.phone.replace(/\D/g, '')}
• E-mail: mailto:${sanitizedData.email}
`;

    console.log(emailContent);

    return res.status(200).json({
      success: true,
      message: 'Mensagem enviada e salva com sucesso!',
      contactId: savedContact.id
    });

  } catch (error) {
    console.error('❌ Erro no processamento do contato:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Erro interno do servidor. Tente novamente.'
    });
  }
}