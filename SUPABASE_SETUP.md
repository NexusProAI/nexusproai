# 🗄️ Configuração do Supabase para Captura de Leads

## 1. Acessar o Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Faça login na sua conta
3. Acesse seu projeto do Supabase

## 2. Criar a Tabela de Leads

1. No painel do Supabase, vá em **Table Editor**
2. Clique em **New Table**
3. Configure a tabela com o nome: `leads`
4. Use o seguinte SQL para criar a tabela:

```sql
-- Criar tabela de leads
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text NOT NULL,
  message text NOT NULL,
  service text DEFAULT 'Não especificado',
  source text DEFAULT 'Site NexusProAI',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Adicionar RLS (Row Level Security)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de leads (público pode inserir)
CREATE POLICY "Anyone can insert leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Política para permitir leitura apenas para usuários autenticados
CREATE POLICY "Authenticated users can view leads" ON leads
  FOR SELECT USING (auth.role() = 'authenticated');

-- Criar índices para melhor performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_company ON leads(company);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at 
    BEFORE UPDATE ON leads 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
```

## 3. Configurar Políticas de Segurança (RLS)

As políticas já estão incluídas no SQL acima:

- ✅ **Inserção pública**: Qualquer pessoa pode inserir leads (necessário para o formulário)
- ✅ **Leitura restrita**: Apenas usuários autenticados podem visualizar os leads
- ✅ **Índices otimizados**: Para consultas rápidas por email, data e empresa

## 4. Verificar Configuração

1. **Teste a conexão** acessando: `https://seu-dominio.com/api/test-supabase`
2. **Teste a API de leads** com uma requisição POST para: `https://seu-dominio.com/api/leads`

Exemplo de teste manual:
```bash
curl -X POST https://nexusproai.com.br/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste Silva",
    "email": "teste@teste.com",
    "phone": "(11) 99999-9999",
    "company": "Empresa Teste",
    "message": "Mensagem de teste",
    "service": "chatbot-whatsapp"
  }'
```

## 5. Estrutura da Tabela

| Campo      | Tipo      | Descrição                    |
|------------|-----------|------------------------------|
| id         | uuid      | ID único do lead             |
| name       | text      | Nome completo                |
| email      | text      | Email de contato             |
| phone      | text      | Telefone                     |
| company    | text      | Nome da empresa              |
| message    | text      | Mensagem enviada             |
| service    | text      | Serviço de interesse         |
| source     | text      | Origem do lead               |
| created_at | timestamp | Data/hora de criação         |
| updated_at | timestamp | Data/hora última atualização |

## 6. Acessar os Dados

1. **Via Dashboard**: Table Editor > leads
2. **Via SQL**: Use o SQL Editor no Supabase
3. **Via API**: Endpoints REST automáticos do Supabase

## 🔒 Segurança

- ✅ RLS ativado para proteger dados
- ✅ Políticas configuradas corretamente  
- ✅ Apenas inserção pública permitida
- ✅ Leitura restrita a usuários autenticados

## 📊 Consultas Úteis

```sql
-- Ver todos os leads ordenados por data
SELECT * FROM leads ORDER BY created_at DESC;

-- Contar leads por serviço
SELECT service, COUNT(*) as total 
FROM leads 
GROUP BY service 
ORDER BY total DESC;

-- Leads dos últimos 7 dias
SELECT * FROM leads 
WHERE created_at >= now() - interval '7 days'
ORDER BY created_at DESC;

-- Leads por empresa
SELECT company, COUNT(*) as total, 
       string_agg(DISTINCT service, ', ') as services
FROM leads 
GROUP BY company 
ORDER BY total DESC;
```

## ✅ Sistema Pronto!

Agora todos os formulários do site salvam automaticamente no banco de dados Supabase!

### Vantagens sobre planilhas:
- 🚀 **Performance superior**
- 🔒 **Segurança profissional** 
- 📊 **Consultas SQL avançadas**
- 🔄 **API REST automática**
- 💾 **Backup automático**
- 📈 **Escalabilidade**