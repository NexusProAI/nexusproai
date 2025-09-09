import { useState } from 'react';

export default function DebugAPI() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testLeadsAPI = async () => {
    setLoading(true);
    setResult('Testando API...\n');
    
    try {
      const testData = {
        name: 'Teste Debug',
        email: 'debug@teste.com',
        phone: '(11) 99999-9999',
        company: 'Empresa Debug',
        message: 'Teste de debug da API',
        service: 'chatbot-whatsapp'
      };

      console.log('🚀 Enviando dados:', testData);

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });

      const data = await response.json();
      
      setResult(prev => prev + `\n✅ Response Status: ${response.status}\n`);
      setResult(prev => prev + `📄 Response Data: ${JSON.stringify(data, null, 2)}\n`);

      if (response.ok) {
        setResult(prev => prev + `\n🎉 SUCESSO! Lead ID: ${data.leadId}`);
      } else {
        setResult(prev => prev + `\n❌ ERRO: ${data.error}`);
      }

    } catch (error) {
      console.error('Erro no teste:', error);
      setResult(prev => prev + `\n💥 ERRO FATAL: ${error.message}`);
    }
    
    setLoading(false);
  };

  const testSupabaseConnection = async () => {
    setLoading(true);
    setResult('Testando conexão Supabase...\n');
    
    try {
      const response = await fetch('/api/test-supabase');
      const data = await response.json();
      
      setResult(prev => prev + `\n📡 Conexão Status: ${response.status}\n`);
      setResult(prev => prev + `📊 Result: ${JSON.stringify(data, null, 2)}`);
      
    } catch (error) {
      setResult(prev => prev + `\n💥 ERRO: ${error.message}`);
    }
    
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1>🔧 Debug API - Nexus Pro</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={testSupabaseConnection}
          disabled={loading}
          style={{ 
            padding: '10px 20px', 
            marginRight: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? '⏳ Testando...' : '🔗 Testar Conexão Supabase'}
        </button>
        
        <button 
          onClick={testLeadsAPI}
          disabled={loading}
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? '⏳ Testando...' : '📝 Testar API Leads'}
        </button>
      </div>

      <div style={{ 
        backgroundColor: 'black', 
        color: 'lime', 
        padding: '20px', 
        borderRadius: '5px',
        whiteSpace: 'pre-wrap',
        fontSize: '14px',
        minHeight: '300px',
        overflow: 'auto'
      }}>
        {result || 'Aguardando teste...'}
      </div>

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p><strong>Instruções:</strong></p>
        <ol>
          <li>Primeiro teste a <strong>Conexão Supabase</strong></li>
          <li>Se OK, teste a <strong>API Leads</strong></li>
          <li>Verifique os logs no console (F12)</li>
          <li>Copie os resultados e me envie</li>
        </ol>
      </div>
    </div>
  );
}