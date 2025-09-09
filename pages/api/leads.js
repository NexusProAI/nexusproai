import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  console.log('🚀 API /api/leads chamada:', req.method);

  if (req.method !== 'POST') {
    console.log('❌ Método não permitido:', req.method);
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    console.log('📝 Dados recebidos:', req.body);
    
    const { name, email, phone, company, message, service, source = 'Site NexusProAI' } = req.body;

    // Validação dos dados obrigatórios
    if (!name || !email || !phone || !company || !message) {
      console.log('❌ Dados obrigatórios faltando');
      return res.status(400).json({ 
        error: 'Todos os campos obrigatórios devem ser preenchidos',
        missing: {
          name: !name,
          email: !email,
          phone: !phone,
          company: !company,
          message: !message
        }
      });
    }

    console.log('📋 Preparando dados para Supabase...');

    const leadData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company.trim(),
      message: message.trim(),
      service: service || 'Não especificado',
      source: source
    };

    console.log('💾 Inserindo no Supabase:', leadData);

    // Inserir no Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select();

    if (error) {
      console.error('❌ Erro Supabase:', error);
      return res.status(500).json({
        error: 'Erro ao salvar lead',
        details: error.message,
        code: error.code
      });
    }

    console.log('✅ Lead salvo com sucesso!', data[0]?.id);

    return res.status(200).json({
      success: true,
      message: 'Lead salvo com sucesso',
      leadId: data[0]?.id
    });

  } catch (error) {
    console.error('❌ Erro geral na API:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor',
      details: error.message
    });
  }
}