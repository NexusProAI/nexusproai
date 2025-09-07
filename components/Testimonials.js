import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Carlos Mendes',
      position: 'Proprietário',
      company: 'Clínica Odontológica Excellence',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'Antes eu perdia 3 horas por dia respondendo as mesmas perguntas no WhatsApp. Agora o chatbot faz isso 24h e ainda agenda consultas automaticamente. Triplicou minha produtividade!',
      rating: 5,
      results: ['3h/dia economizadas', 'Agendamento automático']
    },
    {
      name: 'Marina Silva',
      position: 'Sócia-Fundadora',
      company: 'Escola de Idiomas Fluent',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'O sistema qualifica os alunos interessados e só me envia os que realmente têm perfil para nossos cursos. Convérsoes subiram 180% e parei de perder tempo com curiosos.',
      rating: 5,
      results: ['180% mais conversões', 'Qualificação automática']
    },
    {
      name: 'Roberto Santos',
      position: 'Advogado',
      company: 'Escritório Santos & Associados',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'Agora atendo clientes mesmo aos finais de semana (pelo robô). O chatbot marca consultas, explica serviços e ainda organiza a documentação necessária. Revolucionário!',
      rating: 5,
      results: ['Atendimento 24/7', 'Organização de docs']
    },
    {
      name: 'Fernanda Costa',
      position: 'Proprietária',
      company: 'Estética Avançada',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'Acabaram os "no-show"! O sistema confirma automaticamente, reagenda quando necessário e minha agenda otimizada aumentou o faturamento em 40% no primeiro mês.',
      rating: 5,
      results: ['Zero "no-show"', '40% aumento faturamento']
    },
    {
      name: 'Eduardo Pereira',
      position: 'Contador',
      company: 'Contabilidade Digital Pro',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'O robô explica nossos serviços, calcula orçamentos básicos e agenda reuniões. Só falo com quem já está decidido a fechar. Eficiência total!',
      rating: 5,
      results: ['Orçamentos automáticos', 'Só leads qualificados']
    },
    {
      name: 'Ana Rodrigues',
      position: 'Psicóloga',
      company: 'Consultório Bem-Estar',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'Como atendo casos delicados, era crucial ter um sistema sensível. O chatbot acolhe, explica meu trabalho e agenda com cuidado. Pacientes chegam mais preparados.',
      rating: 5,
      results: ['Acolhimento humanizado', 'Pacientes preparados']
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Casos de{' '}
            <span className="text-gradient">Sucesso Reais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja como profissionais liberais e empresas de serviço estão 
            revolucionando seus atendimentos com automação inteligente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-primary-600 text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              <div className="space-y-2">
                {testimonial.results.map((result, idx) => (
                  <div key={idx} className="bg-white rounded-lg px-4 py-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="font-medium text-gray-900">{result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Próximo da lista: Você
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Estes profissionais decidiram parar de perder tempo com tarefas repetitivas. 
            Chegou a sua vez de ter um sistema que trabalha para você 24/7.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-80 text-sm">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7-15</div>
              <div className="opacity-80 text-sm">Dias para Implementar</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="opacity-80 text-sm">Aumento Médio Produtividade</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-80 text-sm">Atendimento Automatizado</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-2">🏥</div>
              <div className="font-semibold mb-1">Saúde & Bem-Estar</div>
              <div className="text-sm opacity-80">Clínicas, Consultórios</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-2">⚖️</div>
              <div className="font-semibold mb-1">Serviços Profissionais</div>
              <div className="text-sm opacity-80">Advocacia, Contabilidade</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-2">🎓</div>
              <div className="font-semibold mb-1">Educação</div>
              <div className="text-sm opacity-80">Cursos, Escolas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}