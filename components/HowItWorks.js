import { motion } from 'framer-motion';
import { smoothScrollTo } from '../utils/scroll';
import {
  MagnifyingGlassIcon,
  CogIcon,
  ChartBarIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const STEPS = [
  {
    step: '01',
    icon: MagnifyingGlassIcon,
    title: 'Imersão & Diagnóstico',
    description: 'Análise profunda dos seus processos para identificar gargalos e oportunidades de automação com maior impacto.',
    details: [
      'Mapeamento completo dos processos',
      'Identificação de gargalos e perdas',
      'Análise do volume de atendimentos',
      'Levantamento de perguntas frequentes',
    ],
    duration: '1–2 dias',
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.12)',
  },
  {
    step: '02',
    icon: CogIcon,
    title: 'Construção & Implementação',
    description: 'Desenvolvemos a solução de IA sob medida — chatbot, automação de processos ou integração de sistemas.',
    details: [
      'Chatbot personalizado para seu negócio',
      'Integração com WhatsApp / Instagram',
      'Conexão com Google Calendar',
      'Configuração de fluxos inteligentes',
    ],
    duration: '5–7 dias',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.12)',
  },
  {
    step: '03',
    icon: ChartBarIcon,
    title: 'Acompanhamento & Otimização',
    description: 'Monitoramos resultados e fazemos ajustes contínuos para garantir máxima performance e ROI real.',
    details: [
      'Monitoramento em tempo real',
      'Ajustes baseados em dados reais',
      'Otimização contínua dos fluxos',
      'Relatórios mensais de resultados',
    ],
    duration: 'Contínuo',
    color: '#4ade80',
    glow: 'rgba(74,222,128,0.12)',
  },
];

const FEATURES = [
  { icon: BoltIcon,             title: 'Implementação Personalizada', desc: 'Cronograma adaptado ao seu projeto e realidade',     color: '#22d3ee' },
  { icon: WrenchScrewdriverIcon,title: 'Suporte Dedicado',            desc: 'Acompanhamento técnico durante todo o processo',     color: '#a78bfa' },
  { icon: AcademicCapIcon,      title: 'Treinamento Incluso',         desc: 'Capacitação da sua equipe para usar o sistema',      color: '#4ade80' },
  { icon: ShieldCheckIcon,      title: 'Garantia de Resultados',      desc: 'Ajustes até você estar 100% satisfeito',             color: '#fbbf24' },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 bg-surface scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-label mb-3 block">Nosso Processo</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight tracking-tight max-w-2xl">
            Método de{' '}
            <span className="text-gradient">Otimização Inteligente</span>
          </h2>
          <p className="mt-4 text-white/45 text-lg max-w-2xl leading-relaxed">
            Um processo testado para transformar seu atendimento numa máquina de eficiência 24 horas por dia.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 relative">

          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-12 left-1/3 right-1/3 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="relative glass-card rounded-2xl p-8 group transition-all duration-300 hover:border-white/[0.1] overflow-hidden"
              style={{ '--glow': step.glow }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />

              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: step.glow }} />

              <div className="relative">
                {/* Icon + step number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl border transition-colors group-hover:scale-105 duration-300"
                    style={{ borderColor: `${step.color}30`, background: `${step.color}12` }}>
                    <step.icon className="h-6 w-6" style={{ color: step.color }} />
                  </div>
                  <span className="font-display font-black text-5xl text-white/[0.04] leading-none select-none">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {step.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-white/55">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: step.color, opacity: 0.7 }} />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-white/30 text-xs font-display uppercase tracking-[0.12em]">Duração</span>
                  <span className="font-display font-bold text-sm" style={{ color: step.color }}>
                    {step.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Included features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden mb-16"
        >
          <div className="px-8 py-5 border-b border-white/[0.06]">
            <h3 className="font-display font-bold text-white text-lg">O que está incluído</h3>
            <p className="text-white/35 text-sm mt-0.5">Tudo para a automação funcionar com excelência desde o primeiro dia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-7 hover:bg-white/[0.02] transition-colors duration-300 group"
              >
                <div className="p-2.5 rounded-lg w-fit mb-4 border transition-colors group-hover:scale-105 duration-300"
                  style={{ borderColor: `${f.color}25`, background: `${f.color}10` }}>
                  <f.icon className="h-5 w-5" style={{ color: f.color }} />
                </div>
                <h4 className="font-display font-bold text-white text-base mb-2">{f.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-display font-extrabold text-3xl text-white mb-3">
            Pronto para automatizar seu negócio?
          </h3>
          <p className="text-white/45 text-lg mb-8 max-w-lg mx-auto">
            30 minutos, sem compromisso, para entender seu cenário e mostrar o potencial real.
          </p>
          <button
            onClick={() => smoothScrollTo('contato')}
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-void px-8 py-3.5 rounded-xl font-display font-bold text-sm transition-colors duration-200 shadow-glow-cyan"
          >
            Agendar Diagnóstico Gratuito →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
