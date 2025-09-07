# 🤖 Landing Page - Agência de Inteligência Artificial

Uma landing page profissional e moderna desenvolvida com **Next.js**, **React**, **Tailwind CSS** e **Framer Motion** para apresentar uma agência especializada em soluções de Inteligência Artificial.

## ✨ Características

### 🎨 Design e UX/UI
- **Design responsivo** mobile-first
- **Animações suaves** com Framer Motion
- **Gradientes modernos** e cores vibrantes
- **Tipografia elegante** com Inter Font
- **Micro-interações** para melhor experiência

### 🚀 Funcionalidades
- **Hero Section** com gradientes animados e CTAs
- **Seção Sobre** com cards de serviços interativos
- **Grid de Benefícios** com estatísticas e ícones
- **Depoimentos** de clientes com avaliações
- **Formulário de Contato** com validação e coleta de dados
- **Rodapé completo** com links e newsletter
- **Botão WhatsApp** fixo para contato rápido

### 📊 Coleta Automática de Dados
O formulário coleta automaticamente:
- ✅ IP do visitante
- ✅ Localização aproximada (via IP)
- ✅ Origem de tráfego (referrer)
- ✅ User Agent / Browser
- ✅ Timestamp da submissão
- ✅ ID único da submissão

### 🔒 Segurança
- **Sanitização** de dados de entrada
- **Validação** de e-mail e telefone
- **Rate limiting** preparado
- **Prevenção XSS** e injeção
- **HTTPS ready**

### 🎯 SEO Otimizado
- **Meta tags** completas
- **Open Graph** para redes sociais
- **Twitter Cards** configuradas
- **Schema.org** structured data
- **Sitemap.xml** gerado
- **Robots.txt** configurado
- **Canonical URLs**

## 🛠️ Tecnologias Utilizadas

```json
{
  "framework": "Next.js 14",
  "frontend": "React 18",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "icons": "Heroicons",
  "fonts": "Inter (Google Fonts)",
  "deployment": "Vercel Ready"
}
```

## 📁 Estrutura do Projeto

```
NEXUSPROAI/
├── components/
│   ├── Hero.js          # Seção principal com gradientes
│   ├── About.js         # Sobre a agência e serviços
│   ├── Benefits.js      # Grid de vantagens
│   ├── Testimonials.js  # Depoimentos de clientes
│   ├── Contact.js       # Formulário de contato
│   └── Footer.js        # Rodapé completo
├── pages/
│   ├── api/
│   │   └── contact.js   # API para processar formulários
│   ├── _app.js          # App wrapper
│   ├── _document.js     # Document customizado
│   └── index.js         # Página principal
├── public/
│   ├── robots.txt       # SEO
│   ├── sitemap.xml      # Sitemap
│   ├── site.webmanifest # PWA manifest
│   └── sw.js            # Service Worker
├── styles/
│   └── globals.css      # Estilos globais + Tailwind
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🚀 Instalação e Execução

### 1. Cloniar e Instalar
```bash
# Navegar até o diretório
cd NEXUSPROAI

# Instalar dependências
npm install
```

### 2. Executar em Desenvolvimento
```bash
npm run dev
```
🌐 Abrir [http://localhost:3000](http://localhost:3000)

### 3. Build para Produção
```bash
# Gerar build otimizado
npm run build

# Executar versão de produção
npm start
```

## ⚙️ Configurações Necessárias

### 🎯 Analytics e Tracking
No arquivo `pages/index.js`, substitua:
- `GA_MEASUREMENT_ID` pelo seu ID do Google Analytics
- `YOUR_HOTJAR_ID` pelo seu ID do Hotjar

### 📞 Contatos
Atualize os dados de contato em:
- `components/Contact.js` - Informações de contato
- `components/Footer.js` - Dados do rodapé
- `pages/api/contact.js` - E-mails e números

### 🏷️ Marca
Substitua `[Nome da Agência]` por:
- Nome real da agência em todos os componentes
- Dados no `site.webmanifest`
- URLs nos arquivos de SEO

## 🌍 Deploy na Vercel

### Deploy Automático
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel --prod
```

### Variáveis de Ambiente
Configure no painel da Vercel:
```env
NEXT_PUBLIC_GA_ID=seu_google_analytics_id
NEXT_PUBLIC_HOTJAR_ID=seu_hotjar_id
```

## 📈 Funcionalidades da API de Contato

### Endpoint: `/api/contact`
```javascript
// Dados recebidos
{
  name: string,
  email: string,
  phone: string, 
  company: string,
  message: string,
  service: string
}

// Dados coletados automaticamente
{
  submissionId: string,
  ip: string,
  location: string,
  trafficSource: string,
  userAgent: string,
  timestamp: string
}
```

### Log Detalhado
Todos os contatos são logados no console com:
- 📋 Dados do formulário
- 📊 Métricas de origem
- 🔗 Links para contato rápido
- ⚡ Próximos passos sugeridos

## 🔧 Personalização

### Cores (tailwind.config.js)
```javascript
colors: {
  primary: { /* Azul principal */ },
  accent: { /* Azul secundário */ }
}
```

### Animações (globals.css)
```css
.whatsapp-float { /* Botão WhatsApp */ }
.text-gradient { /* Gradientes de texto */ }
.bg-gradient-primary { /* Fundo gradiente */ }
```

## 🧪 Testes e Validação

### Checklist de Produção
- [ ] ✅ Formulário funcionando
- [ ] ✅ Responsividade mobile
- [ ] ✅ Animações suaves
- [ ] ✅ Links internos (scroll suave)
- [ ] ✅ WhatsApp button
- [ ] ✅ SEO meta tags
- [ ] ✅ Analytics configurado
- [ ] ✅ Performance otimizada

### Ferramentas de Teste
- **Lighthouse** para performance/SEO
- **GTMetrix** para velocidade
- **Mobile-Friendly Test** do Google
- **Rich Results Test** para schema

## 📋 Roadmap Futuro

### Fase 2 - Melhorias
- [ ] 🎬 Vídeos explicativos
- [ ] 📧 Integração com e-mail marketing
- [ ] 💬 Chat em tempo real
- [ ] 🔔 Push notifications
- [ ] 📱 App mobile (PWA)

### Fase 3 - Automações
- [ ] 🤖 CRM integration (HubSpot/Pipedrive)
- [ ] ⚡ Zapier webhooks
- [ ] 📊 Dashboard analytics próprio
- [ ] 🎯 A/B testing framework

## 📞 Suporte

Para dúvidas sobre implementação ou customização, entre em contato:

- 📧 **E-mail**: suporte@agencia.com
- 💬 **WhatsApp**: +55 (11) 9999-9999
- 🌐 **Website**: [seudominio.com.br](https://seudominio.com.br)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ e ☕ para revolucionar negócios com IA** 🤖✨