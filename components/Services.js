import { motion } from 'framer-motion';
import { smoothScrollTo } from '../utils/scroll';

const SERVICES = [
  {
    icon: '💬',
    label: 'Chatbot para WhatsApp',
    tagline: 'Atendimento 24/7 sem pausas',
    desc: 'Responda clientes instantaneamente, qualifique leads e feche vendas mesmo fora do horário comercial.',
    features: [
      'Respostas automáticas e inteligentes',
      'Qualificação e triagem de leads',
      'Transferência para humano quando necessário',
    ],
    color: '#4ade80',
    glow: 'rgba(74,222,128,0.08)',
  },
  {
    icon: '📸',
    label: 'Chatbot para Instagram',
    tagline: 'Capture leads nos DMs',
    desc: 'Automatize respostas a comentários e mensagens diretas, capturando dados no piloto automático.',
    features: [
      'Resposta automática a DMs e comentários',
      'Captura e armazenamento de dados',
      'Integração com funil de vendas',
    ],
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.08)',
  },
  {
    icon: '📅',
    label: 'Agendamento Automático',
    tagline: 'Agenda cheia sem esforço manual',
    desc: 'Clientes marcam, reagendam e cancelam horários direto na sua agenda sem precisar falar com ninguém.',
    features: [
      'Integração nativa com Google Calendar',
      'Confirmações e lembretes automáticos',
      'Self-service de cancelamento e reagendamento',
    ],
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.08)',
  },
  {
    icon: '🎯',
    label: 'Qualificação de Leads',
    tagline: 'Só fale com quem importa',
    desc: 'Sistema inteligente que filtra, pontua e prioriza automaticamente cada lead que entra em contato.',
    features: [
      'Scoring automático de oportunidades',
      'Segmentação por perfil e interesse',
      'Distribuição inteligente para vendedores',
    ],
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.08)',
  },
  {
    icon: '⚙️',
    label: 'Automações de Processos',
    tagline: 'Elimine tarefas repetitivas',
    desc: 'Fluxos personalizados que conectam seus sistemas e executam tarefas operacionais sem intervenção humana.',
    features: [
      'Integração entre plataformas e sistemas',
      'Notificações e alertas inteligentes',
      'Relatórios automáticos em tempo real',
    ],
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.08)',
  },
  {
    icon: '🧭',
    label: 'Consultoria em Automação',
    tagline: 'Estratégia antes da execução',
    desc: 'Diagnóstico completo dos seus processos e um roadmap claro de automação com ROI estimado.',
    features: [
      'Mapeamento e análise de processos',
      'Identificação de gargalos e perdas',
      'Plano de implementação por etapas',
    ],
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.08)',
  },
];

export default function Services() {
  const scrollToContact = () => smoothScrollTo('contato');

  return (
    <section id="servicos" className="py-28 bg-void scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-label mb-3 block">Nossos Serviços</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight tracking-tight max-w-2xl">
            Tudo que sua empresa precisa para{' '}
            <span className="text-gradient">automatizar e crescer</span>
          </h2>
          <p className="mt-4 text-white/45 text-lg max-w-2xl leading-relaxed">
            Soluções construídas do zero para o seu negócio. Nenhum template, nenhum atalho.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group relative flex flex-col"
            >
              {/* Top accent line */}
              <div
                className="h-0.5 w-full flex-shrink-0"
                style={{ background: `linear-gradient(90deg, ${s.color}90, transparent)` }}
              />

              {/* Hover ambient glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${s.glow} 0%, transparent 65%)` }}
              />

              <div className="relative p-7 flex flex-col flex-1">
                {/* Icon */}
                <div
                  className="p-3 rounded-xl w-fit border mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{ borderColor: `${s.color}30`, background: `${s.color}12` }}
                >
                  <span className="text-2xl leading-none">{s.icon}</span>
                </div>

                {/* Title + tagline */}
                <h3 className="font-display font-bold text-white text-lg mb-1 leading-snug">
                  {s.label}
                </h3>
                <p
                  className="text-[11px] font-display font-bold uppercase tracking-[0.12em] mb-3"
                  style={{ color: s.color }}
                >
                  {s.tagline}
                </p>
                <p className="text-white/45 text-sm leading-relaxed mb-5">{s.desc}</p>

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs text-white/55">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-0.5 flex-shrink-0"
                        style={{ backgroundColor: s.color, opacity: 0.75 }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/30 text-sm mb-5">
            Não encontrou o que precisa? Fale conosco — criamos soluções personalizadas.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-void px-8 py-3.5 rounded-xl font-display font-bold text-sm transition-colors duration-200 shadow-glow-cyan"
          >
            Agendar Diagnóstico Gratuito →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
