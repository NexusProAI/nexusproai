import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-80 text-sm">Soluções Personalizadas</div>
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