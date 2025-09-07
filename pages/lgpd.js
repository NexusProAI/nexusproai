import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ShieldCheckIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function LGPD() {
  const router = useRouter();

  const goBack = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>LGPD - Lei Geral de Proteção de Dados - Nexus Pro</title>
        <meta name="description" content="Informações sobre nosso compromisso com a LGPD e como protegemos seus dados pessoais." />
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
              <div className="flex items-center mb-6">
                <ShieldCheckIcon className="h-12 w-12 text-primary-600 mr-4" />
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">LGPD</h1>
                  <p className="text-gray-600 text-lg">Lei Geral de Proteção de Dados</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nosso Compromisso com a LGPD</h2>
                  <div className="bg-primary-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      A <strong>Nexus Pro</strong> está totalmente comprometida com o cumprimento da 
                      Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) e com a proteção 
                      da privacidade e segurança dos dados pessoais de nossos clientes, parceiros e visitantes.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">O que é a LGPD?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A Lei Geral de Proteção de Dados (LGPD) é a legislação brasileira que regula o tratamento 
                    de dados pessoais por organizações públicas e privadas. Ela garante maior controle aos 
                    titulares sobre suas informações pessoais e estabelece regras claras sobre coleta, 
                    armazenamento, tratamento e compartilhamento de dados.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <UserGroupIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Direitos do Titular</h3>
                      <p className="text-gray-600 text-sm">Você tem direitos específicos sobre seus dados pessoais</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <ShieldCheckIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Segurança</h3>
                      <p className="text-gray-600 text-sm">Medidas técnicas para proteger suas informações</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <DocumentTextIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Transparência</h3>
                      <p className="text-gray-600 text-sm">Comunicação clara sobre uso dos dados</p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Seus Direitos sob a LGPD</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Como titular de dados pessoais, você possui os seguintes direitos garantidos pela LGPD:
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-4 border-primary-500 pl-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Confirmação e Acesso</h3>
                      <p className="text-gray-700">
                        Direito de confirmar a existência de tratamento e acessar seus dados pessoais.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Correção</h3>
                      <p className="text-gray-700">
                        Solicitar a correção de dados incompletos, inexatos ou desatualizados.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Anonimização, Bloqueio ou Eliminação</h3>
                      <p className="text-gray-700">
                        Requisitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Portabilidade</h3>
                      <p className="text-gray-700">
                        Solicitar a portabilidade dos dados para outro fornecedor de produto ou serviço.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Eliminação dos Dados</h3>
                      <p className="text-gray-700">
                        Requisitar a eliminação dos dados pessoais tratados com base no consentimento.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">6. Informações sobre Compartilhamento</h3>
                      <p className="text-gray-700">
                        Obter informações sobre as entidades públicas e privadas com as quais compartilhamos dados.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">7. Não Consentimento</h3>
                      <p className="text-gray-700">
                        Informação sobre possibilidade de não consentir e sobre as consequências da negativa.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">8. Revogação do Consentimento</h3>
                      <p className="text-gray-700">
                        Revogar o consentimento a qualquer momento, mediante manifestação expressa.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como Exercer Seus Direitos</h2>
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Para exercer qualquer um dos seus direitos sob a LGPD, você pode entrar em contato conosco através dos seguintes canais:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">E-mail Oficial</h4>
                        <p className="text-primary-600">contato@nexuspro.com.br</p>
                        <p className="text-gray-600 text-sm mt-1">Resposta em até 72 horas</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Telefone</h4>
                        <p className="text-primary-600">+55 (11) 9999-9999</p>
                        <p className="text-gray-600 text-sm mt-1">Seg-Sex: 8h às 18h</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bases Legais para Tratamento</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tratamos seus dados pessoais com base nas seguintes bases legais previstas na LGPD:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Consentimento:</strong>
                        <span className="text-gray-700"> Quando você autoriza expressamente o uso dos dados</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Legítimo Interesse:</strong>
                        <span className="text-gray-700"> Para fins comerciais legítimos, respeitando seus direitos</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Execução de Contrato:</strong>
                        <span className="text-gray-700"> Para cumprir obrigações contratuais</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Cumprimento Legal:</strong>
                        <span className="text-gray-700"> Para atender obrigações legais e regulamentares</span>
                      </div>
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Medidas de Segurança</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800">Medidas Técnicas</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Criptografia de dados em trânsito e repouso</li>
                        <li>• Controle de acesso com autenticação multifator</li>
                        <li>• Firewalls e sistemas de detecção de intrusão</li>
                        <li>• Backups seguros e regulares</li>
                        <li>• Monitoramento 24/7 de segurança</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800">Medidas Organizacionais</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Treinamento regular da equipe</li>
                        <li>• Políticas internas de privacidade</li>
                        <li>• Contratos de confidencialidade</li>
                        <li>• Auditoria regulares de segurança</li>
                        <li>• Plano de resposta a incidentes</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tratamento de Dados de Menores</h2>
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Importante:</strong> Nossos serviços são destinados exclusivamente a pessoas 
                      maiores de 18 anos e empresas. Não coletamos intencionalmente dados pessoais de menores de idade. 
                      Se tomarmos conhecimento de que coletamos dados de menores, tomaremos medidas imediatas para 
                      deletar essas informações.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Transferência Internacional</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Quando necessário para a prestação de nossos serviços, podemos transferir dados pessoais 
                    para outros países. Tais transferências são realizadas apenas para países que oferecem 
                    grau de proteção adequado ou mediante garantias específicas:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Cláusulas contratuais padrão</li>
                    <li>Certificações de privacidade</li>
                    <li>Consentimento específico do titular</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Encarregado de Dados (DPO)</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Designamos um Encarregado de Proteção de Dados (DPO) para atuar como canal de comunicação 
                      entre você, a empresa e a Autoridade Nacional de Proteção de Dados (ANPD).
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Contato do DPO</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li><strong>E-mail:</strong> contato@nexuspro.com.br</li>
                        <li><strong>Telefone:</strong> +55 (11) 9999-9999</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Incidentes de Segurança</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares:
                  </p>
                  <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                    <li>Comunicaremos à ANPD em até 72 horas após tomada de conhecimento</li>
                    <li>Informaremos os titulares afetados quando o risco for alto</li>
                    <li>Adotaremos medidas imediatas para minimizar os danos</li>
                    <li>Investigaremos as causas e implementaremos correções</li>
                  </ol>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Atualizações desta Política</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Esta política LGPD pode ser atualizada periodicamente para refletir mudanças em nossas 
                    práticas ou na legislação. Alterações significativas serão comunicadas por e-mail ou 
                    através de aviso em nosso site com pelo menos 30 dias de antecedência.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}