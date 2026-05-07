import { motion } from 'framer-motion';
import { smoothScrollTo } from '../utils/scroll';

const METRICS = [
  { value: '100%', label: 'Clientes Satisfeitos',       sub: 'NPS máximo',             color: '#22d3ee' },
  { value: '100%', label: 'Soluções Personalizadas',    sub: 'zero template',           color: '#a78bfa' },
  { value: '3×',   label: 'Aumento de Produtividade',   sub: 'média por cliente',       color: '#4ade80' },
  { value: '24/7', label: 'Atendimento Automatizado',   sub: 'sem pausas ou férias',    color: '#fbbf24' },
];

const SECTORS = [
  {
    icon: '🏥',
    label: 'Saúde & Bem-Estar',
    sub: 'Clínicas, Consultórios',
    desc: 'Agendamentos automáticos e triagem de pacientes reduzem em 70% o tempo de atendimento administrativo.',
    color: '#22d3ee',
  },
  {
    icon: '⚖️',
    label: 'Serviços Profissionais',
    sub: 'Advocacia, Contabilidade',
    desc: 'Qualificação de clientes potenciais e envio de documentos automatizado liberam horas preciosas diárias.',
    color: '#a78bfa',
  },
  {
    icon: '🎓',
    label: 'Educação',
    sub: 'Cursos, Escolas',
    desc: 'Captação e nurturing de alunos com resposta imediata a dúvidas aumentam taxa de matrícula.',
    color: '#4ade80',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-28 bg-void scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-label mb-3 block">Resultados</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight tracking-tight max-w-xl">
            Próximo da lista:{' '}
            <span className="text-gradient">Você</span>
          </h2>
          <p className="mt-4 text-white/45 text-lg max-w-xl leading-relaxed">
            Estes profissionais decidiram parar de perder tempo com tarefas repetitivas. Chegou a sua vez.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 mb-6 glass-card rounded-2xl overflow-hidden"
        >
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="p-8 md:p-10 text-center group hover:bg-white/[0.03] transition-colors duration-300"
              style={{
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderTop: i >= 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <div
                className="font-display font-extrabold text-4xl md:text-5xl mb-2 leading-none"
                style={{ color: m.color }}
              >
                {m.value}
              </div>
              <div className="font-medium text-white/80 text-sm mb-1">{m.label}</div>
              <div className="text-white/30 text-xs mb-3">{m.sub}</div>
              <div
                className="h-px w-6 mx-auto group-hover:w-12 transition-all duration-500"
                style={{ backgroundColor: m.color, opacity: 0.5 }}
              />
            </div>
          ))}
        </motion.div>

        {/* Sector cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {SECTORS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl p-7 group relative overflow-hidden"
            >
              {/* Subtle glow top-right */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `${s.color}15` }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{s.icon}</div>
                  <div>
                    <div className="font-display font-bold text-white/90 text-base">{s.label}</div>
                    <div className="text-white/35 text-xs">{s.sub}</div>
                  </div>
                </div>
                <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                <div
                  className="mt-5 h-px w-8 group-hover:w-full transition-all duration-700"
                  style={{ backgroundColor: s.color, opacity: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden border border-white/[0.07]"
          style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(124,58,237,0.1) 100%)' }}
        >
          {/* Ambient glows */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-2">
              Sua empresa pode ser a próxima.
            </h3>
            <p className="text-white/50 text-base">
              Comece com um diagnóstico gratuito de 30 minutos.
            </p>
          </div>

          <button
            onClick={() => smoothScrollTo('contato')}
            className="relative flex-shrink-0 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white px-7 py-3.5 rounded-xl font-display font-bold text-sm transition-all duration-200 whitespace-nowrap backdrop-blur-sm"
          >
            Começar Agora →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
