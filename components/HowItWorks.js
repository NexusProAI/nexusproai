import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  CogIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: MagnifyingGlassIcon,
      title: 'Imersão & Diagnóstico',
      description: 'Realizamos uma análise profunda dos seus processos atuais para identificar os principais gargalos de tempo e oportunidades de automação.',
      details: [
        'Mapeamento completo dos processos atuais',
        'Identificação de gargalos e perdas',
        'Análise do volume de atendimentos',
        'Levantamento de perguntas frequentes'
      ],
      duration: '1-2 dias',
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '02',
      icon: CogIcon,
      title: 'Construção & Implementação',
      description: 'Desenhamos e implementamos a solução de IA sob medida, seja um chatbot para atendimento ou uma automação de processos internos.',
      details: [
        'Desenvolvimento do chatbot personalizado',
        'Integração com WhatsApp/Instagram',
        'Conexão com sua agenda (Google Calendar)',
        'Configuração de fluxos inteligentes'
      ],
      duration: '5-7 dias',
      color: 'from-green-500 to-green-600'
    },
    {
      step: '03',
      icon: ChartBarIcon,
      title: 'Acompanhamento & Otimização',
      description: 'Monitoramos os resultados e realizamos ajustes finos para garantir o máximo de performance e o melhor retorno sobre seu investimento.',
      details: [
        'Monitoramento de performance em tempo real',
        'Ajustes baseados em dados reais',
        'Otimização contínua dos fluxos',
        'Relatórios de resultados mensais'
      ],
      duration: 'Contínuo',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const features = [
    {
      title: 'Implementação Rápida',
      description: 'De 7 a 15 dias para ter seu sistema funcionando',
      icon: '⚡'
    },
    {
      title: 'Suporte Dedicado',
      description: 'Acompanhamento técnico durante todo o processo',
      icon: '🛠️'
    },
    {
      title: 'Treinamento Incluso',
      description: 'Capacitação da sua equipe para usar o sistema',
      icon: '🎓'
    },
    {
      title: 'Garantia de Resultados',
      description: 'Ajustes até você ficar 100% satisfeito',
      icon: '✅'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nosso Método de{' '}
            <span className="text-gradient">Otimização Inteligente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um processo testado e comprovado para transformar seu atendimento em uma 
            máquina de eficiência que funciona 24 horas por dia.
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha conectora */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8"></div>
              <ArrowRightIcon className="h-8 w-8 text-gray-300" />
              <ArrowRightIcon className="h-8 w-8 text-gray-300" />
              <div className="w-8 h-8"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  {/* Número do passo */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  {/* Ícone */}
                  <div className={`bg-gradient-to-r ${step.color} p-4 rounded-xl w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                      Duração
                    </div>
                    <div className="text-lg font-semibold text-primary-600">
                      {step.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seção de características */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              O que está incluído
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tudo que você precisa para ter um sistema de automação funcionando perfeitamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto para automatizar seu negócio?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Vamos conversar por 30 minutos, sem compromisso, para eu entender seu cenário 
            e te mostrar o potencial de uma automação no seu negócio.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
          >
            Agendar Diagnóstico Gratuito
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}