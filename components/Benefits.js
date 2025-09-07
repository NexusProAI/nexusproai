import { motion } from 'framer-motion';
import { 
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
  ClockIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function Benefits() {
  const problems = [
    {
      icon: ClockIcon,
      title: 'Perda de Tempo com Perguntas Repetitivas',
      description: 'Perde tempo respondendo as mesmas perguntas todos os dias no WhatsApp e Instagram?',
      stat: '⚠️',
      statLabel: 'Problema Comum'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Perda de Clientes por Demora',
      description: 'Perde clientes por demora no atendimento ou por mensagens recebidas fora do horário comercial?',
      stat: '⚠️',
      statLabel: 'Perda de Revenue'
    },
    {
      icon: CogIcon,
      title: 'Processos Manuais Travando Crescimento',
      description: 'Sente que seus processos manuais (agendamentos, orçamentos, qualificação) estão travando seu crescimento?',
      stat: '⚠️',
      statLabel: 'Gargalo Operacional'
    },
    {
      icon: ChartBarIcon,
      title: 'Falta de Controle sobre Leads',
      description: 'Não consegue acompanhar e qualificar adequadamente todos os leads que chegam?',
      stat: '⚠️',
      statLabel: 'Oportunidade Perdida'
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Dificuldade para Escalar',
      description: 'Seu atendimento não consegue acompanhar o crescimento da demanda?',
      stat: '⚠️',
      statLabel: 'Limite de Capacidade'
    },
    {
      icon: CogIcon,
      title: 'Dependência de Pessoas',
      description: 'Seu negócio para quando alguém fica doente ou sai de férias?',
      stat: '⚠️',
      statLabel: 'Risco Operacional'
    },
    {
      icon: LightBulbIcon,
      title: 'Falta de Dados para Decisões',
      description: 'Toma decisões no "achismo" por não ter dados organizados sobre seu negócio?',
      stat: '⚠️',
      statLabel: 'Decisão sem Base'
    },
    {
      icon: GlobeAltIcon,
      title: 'Competidores Mais Ágeis',
      description: 'Vê concorrentes respondendo mais rápido e conquistando seus clientes?',
      stat: '⚠️',
      statLabel: 'Perda Competitiva'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sua rotina parece{' '}
            <span className="text-gradient">familiar?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chegou a hora de parar de apagar incêndios e começar a construir um sistema.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 hover:border-red-200 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <problem.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {problem.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {problem.description}
                </p>
                
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold mb-1">
                      {problem.stat}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      {problem.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            A Solução: Sistema de Automação 24/7
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Transforme esses problemas em vantagens competitivas com um sistema inteligente 
            que trabalha enquanto você dorme.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">✅ Atendimento</div>
              <div className="opacity-80">24 horas por dia, 7 dias por semana</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">✅ Qualificação</div>
              <div className="opacity-80">Automática de todos os leads</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">✅ Agendamento</div>
              <div className="opacity-80">Direto na sua agenda, sem intervenção</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Quero Ver Como Funciona
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Casos de Uso Comprovados
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">Setor Financeiro</h5>
                <p className="text-gray-600 text-sm">Análise de risco automatizada e detecção de fraudes</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">Saúde</h5>
                <p className="text-gray-600 text-sm">Diagnósticos assistidos por IA e gestão hospitalar</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">E-commerce</h5>
                <p className="text-gray-600 text-sm">Recomendações personalizadas e chatbots inteligentes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}