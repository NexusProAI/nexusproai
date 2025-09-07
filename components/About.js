import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ChatBubbleLeftRightIcon, 
  CalendarDaysIcon, 
  QuestionMarkCircleIcon, 
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const solutions = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Capturam e Qualificam Leads',
      description: 'Seu novo "funcionário digital" identifica os melhores clientes antes mesmo de você falar com eles.',
      features: ['Qualificação Automática', 'Captura de Dados', 'Identificação de Interesse']
    },
    {
      icon: CalendarDaysIcon,
      title: 'Agendam Reuniões e Serviços',
      description: 'Integramos sua agenda para que os clientes marquem horários sem precisar de intervenção humana.',
      features: ['Integração com Google Calendar', 'Agendamento 24/7', 'Confirmação Automática']
    },
    {
      icon: QuestionMarkCircleIcon,
      title: 'Respondem Perguntas Frequentes',
      description: 'Liberamos seu tempo para que você foque em tarefas estratégicas, enquanto o robô cuida do básico.',
      features: ['FAQ Inteligente', 'Respostas Instantâneas', 'Suporte 24h']
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nós transformamos seu{' '}
            <span className="text-gradient">atendimento e processos</span>{' '}
            em uma máquina de eficiência 24/7
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Através de{' '}
            <span className="font-semibold text-primary-600">chatbots inteligentes</span>{' '}
            e automações personalizadas, nós criamos sistemas que trabalham para você enquanto você dorme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary p-3 rounded-xl">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">
                  {solution.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-xl">
                <Image 
                  src="/jean-photo.jpg" 
                  alt="Jean Neres" 
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Jean Neres</h4>
                <p className="text-primary-600 font-medium">Especialista em Automação com IA</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Sobre Mim
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Meu nome é <span className="font-semibold text-primary-600">Jean Neres</span> e, por mais de <span className="font-semibold">3 anos</span>, minha especialidade foi otimizar os sistemas mais complexos (ERPs) e analisar dados para grandes empresas.
                </p>
                <p>
                  Eu aprendi que, <span className="font-semibold">não importa o tamanho do negócio</span>, o sucesso depende de processos eficientes. Hoje, minha missão é trazer essa mesma mentalidade estratégica para pequenas e médias empresas, usando a agilidade e o poder da Inteligência Artificial para resolver problemas reais.
                </p>
                <p>
                  <span className="font-semibold text-primary-600">Não se trata apenas de tecnologia.</span> Trata-se de construir negócios mais inteligentes, eficientes e lucrativos.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Processos Otimizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600">Empresas Atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Sistemas Funcionando</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}