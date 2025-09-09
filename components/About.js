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
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6 shadow-xl">
                <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 15.9 11 17 11S19 10.1 19 11V9H21ZM3 7V9H5V11C5 10.1 5.9 9 7 9V7.5L1 7V9H3ZM18 22H6V20C6 18.3 7.3 17 9 17H15C16.7 17 18 18.3 18 20V22ZM12 13C10.3 13 9 14.3 9 16V18H15V16C15 14.3 13.7 13 12 13Z"/>
                </svg>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Jean Neres</h4>
                <p className="text-primary-600 font-medium">Especialista em Automação Inteligente</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Por que Escolher a Nexus Pro?
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Durante <span className="font-semibold text-primary-600">3 anos</span>, ajudei dezenas de empresas a <span className="font-semibold">economizar tempo e aumentar vendas</span> através de automações inteligentes. Meu foco é simples: <span className="font-semibold text-primary-600">fazer sua empresa funcionar sozinha</span>.
                </p>
                <p>
                  Entendo que você não tem tempo para responder a mesma pergunta 50 vezes por dia. Por isso, criamos <span className="font-semibold">sistemas que trabalham 24 horas</span> - capturando clientes, agendando serviços e fechando negócios enquanto você dorme.
                </p>
                <p>
                  <span className="font-semibold text-primary-600">Resultado?</span> Nossos clientes economizam 3-5 horas diárias, aumentam suas vendas em média 40% e nunca mais perdem um lead por falta de atendimento.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                <div className="text-gray-600">Anos Automatizando</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Negócios Transformados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">40%</div>
                <div className="text-gray-600">Aumento Médio Vendas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Atendimento Automático</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}