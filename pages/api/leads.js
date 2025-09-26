import { supabase } from '../../lib/supabase';
import { leadSchema, validateAndSanitize } from '../../lib/validation';
import { formRateLimit } from '../../lib/rate-limit';

export default async function handler(req, res) {
  // Log apenas método e timestamp para auditoria
  if (process.env.NODE_ENV === 'development') {
    console.log(`API /api/leads - ${req.method} - ${new Date().toISOString()}`);
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Aplicar rate limiting
  try {
    await new Promise((resolve, reject) => {
      formRateLimit(req, res, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  } catch (error) {
    return; // Rate limit já enviou resposta
  }

  try {
    // Validação e sanitização dos dados
    const validation = validateAndSanitize(req.body, leadSchema);

    if (!validation.isValid) {
      return res.status(400).json({
        error: 'Dados inválidos',
        errors: validation.errors
      });
    }

    const leadData = validation.data;

    // Inserir no Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select();

    if (error) {
      // Log apenas em desenvolvimento
      if (process.env.NODE_ENV === 'development') {
        console.error('Erro Supabase:', error);
      }
      return res.status(500).json({
        error: 'Erro ao salvar lead'
      });
    }

    // Log de sucesso apenas em desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      console.log('Lead salvo com sucesso:', data[0]?.id);
    }

    return res.status(200).json({
      success: true,
      message: 'Lead salvo com sucesso',
      leadId: data[0]?.id
    });

  } catch (error) {
    // Log apenas em desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      console.error('Erro geral na API:', error);
    }
    return res.status(500).json({
      error: 'Erro interno do servidor'
    });
  }
}