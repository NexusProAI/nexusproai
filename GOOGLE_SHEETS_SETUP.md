# 🚀 Configuração Google Sheets para Captura de Leads

## 1. Criar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha chamada "**Leads NexusProAI**"
3. Na primeira linha, adicione os cabeçalhos:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Data/Hora | Nome | Email | Telefone | Empresa | Mensagem | Serviço | Origem |

## 2. Configurar Google Apps Script

1. Na planilha, vá em **Extensões > Apps Script**
2. Cole o código abaixo no editor:

```javascript
function doPost(e) {
  try {
    // Abrir a planilha (substitua pelo ID da sua planilha)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Fazer parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);
    
    // Adicionar nova linha com os dados
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('pt-BR'),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.message || '',
      data.service || '',
      data.source || 'Site'
    ]);
    
    console.log('✅ Lead adicionado:', data.name);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Lead salvo!'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('❌ Erro:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Webhook funcionando! Use POST para enviar dados.")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## 3. Fazer Deploy

1. Clique em **Implantar > Nova implantação**
2. Escolha **Aplicativo da Web**
3. Configurações:
   - **Executar como**: Eu (seu email)
   - **Quem tem acesso**: Qualquer pessoa
4. Clique **Implantar**
5. **IMPORTANTE**: Copie a URL que aparece (algo como: `https://script.google.com/macros/s/AKfycbw.../exec`)

## 4. Atualizar o Código do Site

1. No arquivo `components/Contact.js`, linha 63
2. Substitua `AKfycbwXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` pela sua URL real
3. Exemplo:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/SUA_URL_AQUI/exec';
```

## 5. Testar

1. Preencha o formulário no site
2. Verifique se os dados aparecem na planilha
3. Os logs aparecem no Google Apps Script em **Execuções**

## ✅ Resultado

Todos os leads do formulário serão automaticamente salvos na planilha com:
- ✅ Data e hora
- ✅ Dados completos do contato
- ✅ Mensagem enviada
- ✅ Origem (Site NexusProAI)

## 🔧 Personalização

Você pode:
- Adicionar mais colunas na planilha
- Configurar notificações por email
- Criar dashboards automáticos
- Integrar com outras ferramentas

## 📱 WhatsApp + Planilha

O sistema agora faz **DUPLA CAPTURA**:
1. ✅ Salva na planilha Google Sheets
2. ✅ Redireciona para WhatsApp com os dados

**Nenhum lead será perdido!** 🎯