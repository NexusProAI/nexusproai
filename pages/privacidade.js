import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function Privacidade() {
  const router = useRouter();

  const goBack = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Política de Privacidade - Nexus Pro</title>
        <meta name="description" content="Política de privacidade da nossa agência de automação com IA. Transparência no tratamento dos seus dados pessoais." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" type="image/png" href="/flavicon.png" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={goBack}
              className="flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Voltar ao site
            </button>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Política de Privacidade
              </h1>
              
              <p className="text-gray-600 mb-8 text-lg">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informações Gerais</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, 
                    tratamento e proteção dos dados pessoais dos usuários e visitantes do site <strong>Nexus Pro</strong>, 
                    com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados 
                    sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem 
                    gerenciar ou excluir as suas informações pessoais.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Esta Política de Privacidade aplica-se a todos os usuários e visitantes do site e integra 
                    os Termos e Condições Gerais de Uso do site.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Como Coletamos os Dados</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Os dados pessoais do usuário e visitante são coletados pela plataforma da seguinte forma:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Quando o usuário preenche formulários de contato voluntariamente</li>
                    <li>Quando o usuário se inscreve para receber newsletters ou comunicações</li>
                    <li>Quando o usuário navega no site (dados de navegação via cookies)</li>
                    <li>Quando o usuário interage com chatbots ou assistentes virtuais</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Dados Coletados</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Os dados pessoais do usuário e visitante coletados são os seguintes:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1. Dados fornecidos voluntariamente:</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Nome da empresa</li>
                    <li>Cargo/função</li>
                    <li>Mensagens e comunicações enviadas</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2. Dados coletados automaticamente:</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Endereço IP</li>
                    <li>Localização geográfica aproximada</li>
                    <li>Tipo de navegador e versão</li>
                    <li>Sistema operacional</li>
                    <li>Páginas visitadas e tempo de permanência</li>
                    <li>Referrer (site de origem da visita)</li>
                    <li>Data e hora de acesso</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Finalidade da Coleta</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Os dados pessoais do usuário e do visitante coletados e armazenados têm por finalidade:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Responder a solicitações e fornecer suporte ao cliente</li>
                    <li>Desenvolver propostas comerciais personalizadas</li>
                    <li>Enviar informações sobre nossos serviços e soluções</li>
                    <li>Melhorar a experiência do usuário no site</li>
                    <li>Realizar análises estatísticas e de mercado</li>
                    <li>Cumprir obrigações legais e regulamentares</li>
                    <li>Exercer direitos em processos judiciais, administrativos ou arbitrais</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartilhamento de Dados</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Os dados pessoais não serão compartilhados com terceiros, exceto:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Quando expressamente autorizado pelo titular dos dados</li>
                    <li>Para cumprimento de obrigações legais ou regulamentares</li>
                    <li>Com prestadores de serviços técnicos (hospedagem, analytics) sob acordo de confidencialidade</li>
                    <li>Em casos de fusão, aquisição ou reorganização empresarial</li>
                    <li>Para proteção dos direitos, propriedade ou segurança da empresa</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seus Direitos (LGPD)</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Conforme previsto na Lei Geral de Proteção de Dados (LGPD), você possui os seguintes direitos:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Confirmação e acesso:</strong> Confirmar se tratamos seus dados e acessá-los</li>
                    <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
                    <li><strong>Anonimização ou eliminação:</strong> Solicitar anonimização ou eliminação dos dados</li>
                    <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados para outro fornecedor</li>
                    <li><strong>Informações sobre compartilhamento:</strong> Obter informações sobre o compartilhamento</li>
                    <li><strong>Revogação do consentimento:</strong> Revogar o consentimento a qualquer momento</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Para exercer esses direitos, entre em contato conosco através do e-mail: 
                    <a href="mailto:privacidade@jeanneres.com" className="text-primary-600 hover:text-primary-700 ml-1">
                      privacidade@jeanneres.com
                    </a>
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Segurança dos Dados</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger 
                    seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. 
                    Isso inclui criptografia, controle de acesso, firewalls e monitoramento regular de nossos sistemas.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Retenção de Dados</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Seus dados pessoais serão mantidos pelo tempo necessário para cumprir as finalidades 
                    para as quais foram coletados, ou conforme exigido por lei. Dados de contatos comerciais 
                    podem ser mantidos por até 5 anos após o último contato, salvo solicitação expressa de exclusão.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Alterações na Política</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Esta Política de Privacidade pode ser alterada a qualquer momento. Alterações significativas 
                    serão comunicadas através do site ou por e-mail. O uso continuado do site após as alterações 
                    constitui aceitação da nova política.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contato</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Para questões relacionadas a esta Política de Privacidade ou ao tratamento de dados pessoais:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li><strong>E-mail:</strong> contato@nexuspro.com.br</li>
                      <li><strong>Telefone:</strong> +55 (11) 9999-9999</li>
                      <li><strong>Endereço:</strong> Betim, MG - Brasil</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}