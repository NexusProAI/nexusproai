import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  try {
    console.log('🔍 Testando conexão com Supabase...');
    
    // Testa a conexão
    const { data: testData, error: testError } = await supabase
      .from('leads')
      .select('count', { count: 'exact' });

    if (testError) {
      console.error('❌ Erro ao conectar com Supabase:', testError);
      return res.status(500).json({
        success: false,
        error: testError.message,
        details: testError.details,
        hint: testError.hint
      });
    }

    console.log('✅ Conexão com Supabase OK');
    
    return res.status(200).json({
      success: true,
      message: 'Conexão com Supabase funcionando',
      count: testData
    });

  } catch (error) {
    console.error('❌ Erro geral:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}