import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function Termos() {
  const router = useRouter();

  const goBack = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Termos de Uso - Nexus Pro</title>
        <meta name="description" content="Termos e condições de uso dos serviços de automação com IA. Direitos e responsabilidades dos usuários." />
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
                Termos de Uso
              </h1>
              
              <p className="text-gray-600 mb-8 text-lg">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ao acessar e utilizar o site <strong>Nexus Pro</strong> e nossos serviços de automação 
                    com inteligência artificial, você concorda em cumprir e estar vinculado aos seguintes 
                    termos e condições de uso. Se você não concordar com qualquer parte destes termos, 
                    não deve utilizar nosso site ou serviços.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam 
                    ou utilizam o site e serviços da <strong>Nexus Pro</strong>.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrição dos Serviços</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A <strong>Nexus Pro</strong> oferece serviços especializados em:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Desenvolvimento de chatbots inteligentes para WhatsApp e Instagram</li>
                    <li>Automação de processos empresariais com IA</li>
                    <li>Sistemas de agendamento automatizado</li>
                    <li>Qualificação automática de leads</li>
                    <li>Consultoria em transformação digital e IA</li>
                    <li>Análise de dados e business intelligence</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso Permitido</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Você pode usar nosso site e serviços para:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Solicitar informações sobre nossos serviços</li>
                    <li>Agendar consultas e demonstrações</li>
                    <li>Acessar materiais educacionais disponibilizados</li>
                    <li>Participar de webinars e eventos online</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1. Uso Comercial</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nossos serviços são destinados exclusivamente para uso comercial legítimo por empresas 
                    e profissionais que buscam soluções de automação e IA para seus negócios.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uso Proibido</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Você concorda em NÃO usar nosso site ou serviços para:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Atividades ilegais ou fraudulentas</li>
                    <li>Spam, phishing ou engenharia social</li>
                    <li>Violar direitos de propriedade intelectual</li>
                    <li>Transmitir malware, vírus ou códigos maliciosos</li>
                    <li>Coletar dados de outros usuários sem permissão</li>
                    <li>Competir diretamente copiando nossos métodos ou soluções</li>
                    <li>Reverter engenharia de nossas soluções proprietárias</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propriedade Intelectual</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Todo o conteúdo do site, incluindo mas não limitado a textos, gráficos, logotipos, 
                    ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, 
                    é propriedade da <strong>Nexus Pro</strong> ou de seus fornecedores de conteúdo 
                    e está protegido por leis de direitos autorais.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1. Licença Limitada</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Concedemos a você uma licença limitada, não exclusiva e não transferível para acessar 
                    e usar o site para fins informativos e comerciais legítimos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Responsabilidades do Cliente</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1. Informações Precisas</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Você se compromete a fornecer informações precisas, completas e atualizadas sobre 
                    sua empresa e necessidades quando solicitar nossos serviços.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2. Cooperação</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para o sucesso dos projetos de automação, você concorda em:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Fornecer acesso necessário aos sistemas e dados</li>
                    <li>Designar representantes qualificados para o projeto</li>
                    <li>Participar ativamente das fases de desenvolvimento e testes</li>
                    <li>Cumprir com prazos acordados para feedback e aprovações</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitação de Responsabilidade</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Em nenhuma circunstância a <strong>Nexus Pro</strong> será responsável por:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Danos indiretos, incidentais, especiais ou consequenciais</li>
                    <li>Perda de lucros, dados ou oportunidades de negócio</li>
                    <li>Interrupções temporárias de serviço por manutenção</li>
                    <li>Uso inadequado das soluções implementadas</li>
                    <li>Falhas de terceiros (APIs, plataformas externas)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Nossa responsabilidade total não excederá o valor pago pelos serviços nos 12 meses anteriores.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Garantias e SLA</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1. Garantia de Qualidade</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Garantimos que nossos serviços serão prestados com o padrão profissional da indústria 
                    e de acordo com as especificações acordadas no contrato.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2. Tempo de Resposta</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Suporte crítico: 4 horas (horário comercial)</li>
                    <li>Suporte normal: 24 horas</li>
                    <li>Solicitações de melhoria: 72 horas para análise</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Pagamentos e Reembolsos</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1. Condições de Pagamento</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Os pagamentos devem ser efetuados conforme acordado no contrato específico de serviços. 
                    Atrasos superiores a 30 dias podem resultar na suspensão dos serviços.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2. Política de Reembolso</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Reembolsos serão considerados caso a caso, mediante análise técnica que comprove 
                    descumprimento das especificações acordadas em contrato.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Confidencialidade</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Todas as informações comerciais, técnicas e estratégicas compartilhadas durante 
                    nossa parceria são tratadas como confidenciais. Ambas as partes se comprometem 
                    a não divulgar informações sensíveis a terceiros sem autorização expressa.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modificações dos Termos</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Reservamo-nos o direito de modificar estes termos a qualquer momento. Mudanças 
                    significativas serão comunicadas com 30 dias de antecedência. O uso continuado 
                    dos serviços após as alterações constitui aceitação dos novos termos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Rescisão</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Qualquer parte pode rescindir o contrato mediante aviso prévio por escrito de 30 dias. 
                    Em caso de violação material destes termos, a rescisão pode ser imediata.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Após a rescisão, as obrigações de confidencialidade permanecerão em vigor por 2 anos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Lei Aplicável</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Estes termos são regidos pelas leis da República Federativa do Brasil. 
                    Qualquer disputa será resolvida nos tribunais de São Paulo, SP.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contato</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Para questões relacionadas a estes Termos de Uso:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li><strong>E-mail:</strong> contato@nexuspro.com.br</li>
                      <li><strong>Telefone:</strong> +55 (11) 9999-9999</li>
                      <li><strong>Endereço:</strong> São Paulo, SP - Brasil</li>
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