import { motion } from 'framer-motion';
import { smoothScrollTo } from '../utils/scroll';
import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
  ClockIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const PROBLEMS = [
  { icon: ClockIcon,          title: 'Perguntas Repetitivas',    tag: 'Perda de Tempo',        desc: 'Responde as mesmas perguntas todos os dias no WhatsApp e Instagram?', color: '#ef4444' },
  { icon: CurrencyDollarIcon, title: 'Clientes Perdidos',        tag: 'Perda de Revenue',       desc: 'Perde negócios por lentidão no atendimento ou mensagens fora do horário?', color: '#f97316' },
  { icon: CogIcon,            title: 'Processos Manuais',        tag: 'Gargalo Operacional',    desc: 'Agendamentos, orçamentos e qualificação feitos à mão travam o crescimento.', color: '#eab308' },
  { icon: ChartBarIcon,       title: 'Leads sem Controle',       tag: 'Oportunidade Perdida',   desc: 'Não consegue acompanhar e qualificar todos os leads que chegam?', color: '#ef4444' },
  { icon: ArrowTrendingUpIcon,title: 'Escala Travada',           tag: 'Limite de Capacidade',   desc: 'Seu atendimento não acompanha o crescimento da demanda?', color: '#f97316' },
  { icon: UserGroupIcon,      title: 'Dependência de Pessoas',   tag: 'Risco Operacional',      desc: 'O negócio para quando alguém fica doente ou entra de férias.', color: '#eab308' },
  { icon: LightBulbIcon,      title: 'Decisões no Achismo',      tag: 'Sem Dados',              desc: 'Sem dados organizados, as decisões estratégicas ficam no feeling.', color: '#ef4444' },
  { icon: GlobeAltIcon,       title: 'Concorrentes Mais Ágeis',  tag: 'Perda Competitiva',      desc: 'Vê concorrentes respondendo mais rápido e ganhando seus clientes?', color: '#f97316' },
];

const SOLUTIONS = [
  { label: 'Atendimento 24/7',       sub: 'Nunca perca um cliente por horário',  icon: '⏰', color: '#22d3ee' },
  { label: 'Qualificação Automática', sub: 'Todos os leads priorizados',          icon: '🎯', color: '#a78bfa' },
  { label: 'Agendamento Inteligente', sub: 'Direto na sua agenda',                icon: '📅', color: '#4ade80' },
];

const SECTORS = [
  { icon: '🏥', label: 'Saúde & Bem-Estar',       sub: 'Clínicas, Consultórios' },
  { icon: '⚖️', label: 'Serviços Profissionais',   sub: 'Advocacia, Contabilidade' },
  { icon: '🎓', label: 'Educação',                 sub: 'Cursos, Escolas' },
  { icon: '🏦', label: 'Setor Financeiro',          sub: 'Análise e Riscos' },
  { icon: '🛒', label: 'E-commerce',               sub: 'Recomendações e Chatbots' },
  { icon: '🏗️', label: 'Construção & Reforma',     sub: 'Orçamentos e Agendamentos' },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-28 bg-void scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-label mb-3 block">Diagnóstico</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight tracking-tight">
            Sua rotina{' '}
            <span style={{ color: '#f87171' }}>parece familiar?</span>
          </h2>
          <p className="mt-4 text-white/45 text-lg max-w-xl leading-relaxed">
            Chegou a hora de parar de apagar incêndios e começar a construir um sistema inteligente.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="relative glass-card rounded-xl p-5 overflow-hidden group transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]"
            >
              {/* Left accent stripe */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl"
                style={{ backgroundColor: p.color, opacity: 0.6 }}
              />

              <div className="flex items-center gap-2.5 mb-3 pl-2">
                <div className="p-1.5 rounded-lg transition-colors group-hover:bg-white/[0.05]"
                  style={{ background: `${p.color}15` }}>
                  <p.icon className="h-4 w-4" style={{ color: p.color }} />
                </div>
                <span className="text-[10px] font-display font-bold uppercase tracking-[0.12em]"
                  style={{ color: p.color, opacity: 0.85 }}>
                  {p.tag}
                </span>
              </div>

              <h3 className="font-display font-bold text-white/85 text-sm mb-1.5 leading-snug pl-2">
                {p.title}
              </h3>
              <p className="text-white/35 text-xs leading-relaxed pl-2">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-10 md:p-14 mb-14 overflow-hidden border border-white/[0.07]"
          style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(124,58,237,0.06) 100%)' }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="max-w-xl mb-10">
              <span className="text-cyan-400 text-xs font-display font-bold tracking-[0.18em] uppercase mb-3 block">
                A Solução
              </span>
              <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4 leading-tight">
                Sistema de Automação Inteligente{' '}
                <span className="text-gradient">24/7</span>
              </h3>
              <p className="text-white/50 text-lg leading-relaxed">
                Transforme esses problemas em vantagens competitivas com um sistema que trabalha enquanto você dorme.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {SOLUTIONS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3.5 p-5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="text-2xl leading-none flex-shrink-0">{s.icon}</div>
                  <div>
                    <div className="font-display font-bold text-white text-sm">{s.label}</div>
                    <div className="text-white/40 text-xs mt-0.5">{s.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => smoothScrollTo('contato')}
              className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-void px-7 py-3.5 rounded-xl font-display font-bold text-sm transition-colors duration-200 shadow-glow-cyan"
            >
              Quero Ver Como Funciona →
            </button>
          </div>
        </motion.div>

        {/* Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/25 text-xs font-display font-semibold uppercase tracking-[0.18em] mb-5">
            Casos de uso comprovados
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SECTORS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover rounded-xl p-4 text-center"
              >
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-display font-semibold text-white/80 text-xs leading-snug mb-0.5">{s.label}</div>
                <div className="text-white/30 text-[11px]">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
