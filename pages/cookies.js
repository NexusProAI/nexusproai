import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CogIcon, EyeIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function Cookies() {
  const router = useRouter();

  const goBack = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Política de Cookies - Nexus Pro</title>
        <meta name="description" content="Como utilizamos cookies para melhorar sua experiência de navegação e analisar o uso do site." />
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
                <CogIcon className="h-12 w-12 text-primary-600 mr-4" />
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Política de Cookies</h1>
                  <p className="text-gray-600 text-lg">Como utilizamos cookies em nosso site</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">O que são Cookies?</h2>
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo 
                      (computador, tablet ou smartphone) quando você visita um site. Eles são amplamente 
                      utilizados para fazer os sites funcionarem de forma mais eficiente, bem como fornecer 
                      informações aos proprietários do site.
                    </p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Os cookies nos ajudam a:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Lembrar suas preferências e configurações</li>
                    <li>Entender como você usa nosso site</li>
                    <li>Melhorar sua experiência de navegação</li>
                    <li>Personalizar conteúdo e anúncios</li>
                    <li>Analisar o tráfego do site</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tipos de Cookies que Utilizamos</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <CogIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Essenciais</h3>
                      <p className="text-gray-600 text-sm">Necessários para o funcionamento básico do site</p>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                      <EyeIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Funcionais</h3>
                      <p className="text-gray-600 text-sm">Melhoram a funcionalidade e experiência</p>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
                      <ChartBarIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                      <p className="text-gray-600 text-sm">Coletam informações sobre o uso do site</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="border border-green-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <CogIcon className="h-6 w-6 text-green-600 mr-2" />
                        Cookies Essenciais
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Estes cookies são necessários para que o site funcione corretamente. Eles não podem 
                        ser desativados em nossos sistemas. Geralmente são definidos apenas em resposta a 
                        ações feitas por você que constituem uma solicitação de serviços.
                      </p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Cookie</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Finalidade</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Duração</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="px-4 py-2 text-sm text-gray-700">next-auth.session</td>
                              <td className="px-4 py-2 text-sm text-gray-700">Mantém sessão do usuário</td>
                              <td className="px-4 py-2 text-sm text-gray-700">30 dias</td>
                            </tr>
                            <tr className="border-t">
                              <td className="px-4 py-2 text-sm text-gray-700">csrf-token</td>
                              <td className="px-4 py-2 text-sm text-gray-700">Proteção contra ataques CSRF</td>
                              <td className="px-4 py-2 text-sm text-gray-700">Sessão</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="border border-blue-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <EyeIcon className="h-6 w-6 text-blue-600 mr-2" />
                        Cookies Funcionais
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Estes cookies permitem que o site forneça funcionalidades e personalização 
                        aprimoradas. Podem ser definidos por nós ou por terceiros cujos serviços 
                        adicionamos às nossas páginas.
                      </p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Cookie</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Finalidade</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Duração</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="px-4 py-2 text-sm text-gray-700">theme-preference</td>
                              <td className="px-4 py-2 text-sm text-gray-700">Lembra preferência de tema</td>
                              <td className="px-4 py-2 text-sm text-gray-700">365 dias</td>
                            </tr>
                            <tr className="border-t">
                              <td className="px-4 py-2 text-sm text-gray-700">language-pref</td>
                              <td className="px-4 py-2 text-sm text-gray-700">Idioma preferido</td>
                              <td className="px-4 py-2 text-sm text-gray-700">90 dias</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="border border-purple-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <ChartBarIcon className="h-6 w-6 text-purple-600 mr-2" />
                        Cookies de Analytics
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Estes cookies nos ajudam a entender como os visitantes interagem com o site, 
                        coletando e relatando informações anonimamente. Isso nos permite melhorar 
                        continuamente nosso site.
                      </p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Cookie</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Finalidade</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Duração</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="px-4 py-2 text-sm text-gray-700">_ga</td>
                              <td className="px-4 py-2 text-sm text-gray-700">Identificador único do Google Analytics</td>
                              <td className="px-4 py-2 text-sm text-gray-700">2 anos</td>
                            </tr>
                            <tr className="border-t">
                              <td className="px-4 py-2 text-sm text-gray-700">_ga_*</td>
                              <td className="px-4 py-2 text-sm text-gray-700">Estado da sessão do Google Analytics</td>
                              <td className="px-4 py-2 text-sm text-gray-700">2 anos</td>
                            </tr>
                            <tr className="border-t">
                              <td className="px-4 py-2 text-sm text-gray-700">_hjid</td>
                              <td className="px-4 py-2 text-sm text-gray-700">Hotjar - Identificador do usuário</td>
                              <td className="px-4 py-2 text-sm text-gray-700">365 dias</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies de Terceiros</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Utilizamos serviços de terceiros que podem definir cookies em seu dispositivo. 
                    Estes serviços têm suas próprias políticas de privacidade:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        Usado para analisar o tráfego do site e entender como os usuários interagem com nosso conteúdo.
                      </p>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                         className="text-primary-600 hover:text-primary-700 text-sm">
                        Ver política de privacidade do Google
                      </a>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Hotjar</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        Ferramenta de análise de comportamento do usuário que nos ajuda a melhorar a experiência do site.
                      </p>
                      <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer" 
                         className="text-primary-600 hover:text-primary-700 text-sm">
                        Ver política de privacidade da Hotjar
                      </a>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gerenciar suas Preferências de Cookies</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Você tem o direito de decidir se aceita ou rejeita cookies. Você pode exercer 
                    suas preferências de cookies através das seguintes opções:
                  </p>

                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Controle do Navegador</h3>
                    <p className="text-gray-700 mb-4">
                      A maioria dos navegadores permite controlar cookies através de suas configurações:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Chrome</h4>
                        <p className="text-gray-600 text-sm">
                          Configurações → Privacidade e segurança → Cookies e outros dados de sites
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Firefox</h4>
                        <p className="text-gray-600 text-sm">
                          Preferências → Privacidade & Segurança → Cookies e dados de sites
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                        <p className="text-gray-600 text-sm">
                          Preferências → Privacidade → Gerenciar dados do site
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Edge</h4>
                        <p className="text-gray-600 text-sm">
                          Configurações → Privacidade, pesquisa e serviços → Cookies
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">⚠️ Importante</h3>
                    <p className="text-gray-700">
                      Bloquear ou excluir cookies pode afetar sua experiência de navegação e algumas 
                      funcionalidades do site podem não funcionar corretamente.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opt-out de Serviços Específicos</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Você pode optar por não participar de serviços específicos:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Google Analytics:</strong>
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" 
                           className="text-primary-600 hover:text-primary-700 ml-1">
                          Google Analytics Opt-out Browser Add-on
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Hotjar:</strong>
                        <a href="https://www.hotjar.com/legal/compliance/opt-out" target="_blank" rel="noopener noreferrer" 
                           className="text-primary-600 hover:text-primary-700 ml-1">
                          Hotjar Opt-out
                        </a>
                      </div>
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies e Dispositivos Móveis</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Em dispositivos móveis, você pode gerenciar cookies através das configurações 
                    do navegador ou de identificadores de dispositivo móvel:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">iOS (iPhone/iPad)</h4>
                      <p className="text-gray-700 text-sm">
                        Configurações → Privacidade e Segurança → Rastreamento → 
                        Permitir que apps solicitem rastreamento
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Android</h4>
                      <p className="text-gray-700 text-sm">
                        Configurações → Google → Anúncios → 
                        Redefinir ID de publicidade
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Retenção de Dados de Cookies</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Os dados coletados através de cookies são retidos pelos seguintes períodos:
                  </p>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Cookies de sessão:</strong> Excluídos quando você fecha o navegador</li>
                    <li>• <strong>Cookies persistentes:</strong> Conforme especificado na tabela de cada cookie</li>
                    <li>• <strong>Dados de analytics:</strong> Agregados e anonimizados após 26 meses</li>
                    <li>• <strong>Logs de servidor:</strong> Mantidos por 12 meses para fins de segurança</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alterações na Política de Cookies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças 
                    em nossos cookies ou por outros motivos operacionais, legais ou regulamentares. 
                    Revisamos esta política regularmente e a data da última atualização está indicada no topo da página.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Entre em Contato</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Se você tiver dúvidas sobre nossa Política de Cookies ou sobre como usamos cookies:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li><strong>E-mail:</strong> nexuspro@outlook.com</li>
                      <li><strong>Telefone:</strong> +55 (31) 99444-2517</li>
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