export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método não permitido' 
    });
  }

  try {
    console.log('Dados recebidos:', req.body);
    
    const { name, email, phone, company, message, service } = req.body;

    if (!name || !email || !phone || !company || !message) {
      return res.status(400).json({
        success: false,
        message: 'Todos os campos obrigatórios devem ser preenchidos'
      });
    }

    // Por enquanto só vamos retornar sucesso sem salvar
    console.log('✅ Dados validados com sucesso');

    return res.status(200).json({
      success: true,
      message: 'Teste concluído com sucesso!',
      data: { name, email, phone, company, message, service }
    });

  } catch (error) {
    console.error('❌ Erro no teste:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Erro interno do servidor. Tente novamente.'
    });
  }
}