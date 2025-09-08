import Head from 'next/head';

export default function PoliticaPrivacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade - NexusProAI</title>
        <meta name="description" content="Política de Privacidade da NexusProAI - Como coletamos, usamos e protegemos seus dados" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-lg text-gray-600">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informações que Coletamos</h2>
              <div className="text-gray-700 space-y-3">
                <p>Coletamos as seguintes informações quando você utiliza nossos serviços:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Dados pessoais:</strong> Nome, email, telefone e empresa</li>
                  <li><strong>Dados de comunicação:</strong> Mensagens enviadas através do formulário de contato</li>
                  <li><strong>Dados técnicos:</strong> Endereço IP, tipo de navegador e informações de acesso</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Como Utilizamos suas Informações</h2>
              <div className="text-gray-700 space-y-3">
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Responder às suas solicitações de contato</li>
                  <li>Fornecer informações sobre nossos serviços</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Enviar comunicações marketing (apenas com seu consentimento)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartilhamento de Informações</h2>
              <div className="text-gray-700 space-y-3">
                <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Quando necessário para cumprir obrigações legais</li>
                  <li>Com fornecedores de serviços que nos ajudam a operar nosso negócio</li>
                  <li>Com seu consentimento explícito</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Segurança dos Dados</h2>
              <div className="text-gray-700 space-y-3">
                <p>Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seus Direitos</h2>
              <div className="text-gray-700 space-y-3">
                <p>Você tem o direito de:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir dados incorretos ou incompletos</li>
                  <li>Excluir suas informações pessoais</li>
                  <li>Opor-se ao processamento de seus dados</li>
                  <li>Solicitar a portabilidade de seus dados</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies e Tecnologias Similares</h2>
              <div className="text-gray-700 space-y-3">
                <p>Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Alterações nesta Política</h2>
              <div className="text-gray-700 space-y-3">
                <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através de nosso site ou por email.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contato</h2>
              <div className="text-gray-700 space-y-3">
                <p>Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> contato@nexusproai.com</li>
                  <li><strong>WhatsApp:</strong> +55 (11) 99999-9999</li>
                </ul>
              </div>
            </section>

          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => window.history.back()} 
              className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Voltar
            </button>
          </div>

        </div>
      </div>
    </>
  );
}