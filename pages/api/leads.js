import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { name, email, phone, company, message, service, source = 'Site NexusProAI' } = req.body;

    // Validação dos dados obrigatórios
    if (!name || !email || !phone || !company || !message) {
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

    console.log('📋 Salvando lead no Supabase:', { name, email, company, service });

    // Inserir no Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          company: company.trim(),
          message: message.trim(),
          service: service || 'Não especificado',
          source: source,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('❌ Erro ao inserir no Supabase:', error);
      return res.status(500).json({
        error: 'Erro ao salvar lead',
        details: error.message
      });
    }

    console.log('✅ Lead salvo com sucesso:', data[0]);

    return res.status(200).json({
      success: true,
      message: 'Lead salvo com sucesso',
      leadId: data[0].id
    });

  } catch (error) {
    console.error('❌ Erro geral na API:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor',
      details: error.message
    });
  }
}