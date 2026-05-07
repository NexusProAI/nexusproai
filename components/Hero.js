import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { smoothScrollTo } from '../utils/scroll';

/* ─── Animated counter ───────────────────────────────── */
function AnimatedCounter({ to, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const step = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const t = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * to));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [to, duration]);

  return <>{count}{suffix}</>;
}

/* ─── n8n-style workflow node ────────────────────────── */
function WorkflowNode({ icon, label, color, accent, style }) {
  return (
    <div
      className="absolute flex items-center gap-2 px-3 py-2 rounded-lg border"
      style={{
        ...style,
        width: 114,
        background: `linear-gradient(135deg, ${color}18 0%, ${color}08 100%)`,
        borderColor: `${color}40`,
      }}
    >
      <span className="text-sm leading-none">{icon}</span>
      <div>
        <div className="text-white text-[11px] font-display font-semibold leading-none mb-0.5">{label}</div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: accent }} />
          <span className="text-[9px] font-medium" style={{ color: accent }}>ativo</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Live activity item ─────────────────────────────── */
function ActivityItem({ icon, text, time, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 + index * 0.4 }}
      className="flex items-center gap-2.5"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
      <span className="text-white/60 text-[11px] font-medium truncate flex-1">{text}</span>
      <span className="text-white/25 text-[10px] flex-shrink-0">{time}</span>
    </motion.div>
  );
}

/* ─── n8n workflow visualization ─────────────────────── */
function WorkflowDashboard() {
  // Canvas: 460×200px, 3 columns with 40px gaps, 16–20px margins
  // Col1 x=20 (Webhook), Col2 x=174 (AI Engine), Col3 x=328 (outputs)
  // Vertical: 3 right nodes, 18px gap, 16px top/bottom margins
  const nodes = [
    { id: 'webhook', icon: '⚡', label: 'Webhook',   color: '#f97316', accent: '#fb923c', top: 78,  left: 20  },
    { id: 'ai',      icon: '🧠', label: 'IA Engine', color: '#8b5cf6', accent: '#a78bfa', top: 78,  left: 174 },
    { id: 'wa',      icon: '💬', label: 'WhatsApp',  color: '#22c55e', accent: '#4ade80', top: 16,  left: 328 },
    { id: 'cal',     icon: '📅', label: 'Calendar',  color: '#06b6d4', accent: '#22d3ee', top: 78,  left: 328 },
    { id: 'crm',     icon: '🗃️', label: 'CRM',       color: '#f59e0b', accent: '#fbbf24', top: 140, left: 328 },
  ];

  const activities = [
    { text: 'Lead qualificado · João Souza', time: 'agora' },
    { text: 'Reunião agendada · Amanhã 14h', time: '4s' },
    { text: 'Follow-up enviado · Maria Lima', time: '11s' },
  ];

  return (
    <div className="w-[460px] rounded-2xl overflow-hidden border border-white/[0.08] shadow-glass"
      style={{ background: 'rgba(13,17,23,0.85)', backdropFilter: 'blur(24px)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/60 text-xs font-display font-medium">Fluxo ao Vivo</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/25 text-[10px]">127 execuções hoje</span>
          <div className="flex gap-1">
            {['#ef4444','#eab308','#22c55e'].map((c, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c, opacity: 0.8 }} />
            ))}
          </div>
        </div>
      </div>

      {/* Workflow canvas — nodes use absolute coords matching SVG viewBox 460×200 */}
      <div className="relative" style={{ height: 200 }}>
        {/* SVG connection lines — aligned with node positions */}
        <svg
          viewBox="0 0 460 200"
          className="absolute inset-0 w-full h-full"
          overflow="visible"
        >
          <defs>
            {/* Paths: node center-right → next node center-left */}
            <path id="p1" d="M 134 100 L 174 100" />
            <path id="p2" d="M 288 100 C 308 100, 308 38, 328 38" />
            <path id="p3" d="M 288 100 L 328 100" />
            <path id="p4" d="M 288 100 C 308 100, 308 162, 328 162" />

            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Static dashed lines */}
          {[
            { d: 'M 134 100 L 174 100',                  color: '#f97316' },
            { d: 'M 288 100 C 308 100, 308 38, 328 38',  color: '#22c55e' },
            { d: 'M 288 100 L 328 100',                  color: '#06b6d4' },
            { d: 'M 288 100 C 308 100, 308 162, 328 162', color: '#f59e0b' },
          ].map(({ d, color }, i) => (
            <path key={i} d={d} stroke={color} strokeWidth="1"
              strokeOpacity="0.3" strokeDasharray="5 3" fill="none" />
          ))}

          {/* Animated dots */}
          {[
            { href: '#p1', color: '#fb923c', dur: '1.2s', begin: '0s'   },
            { href: '#p2', color: '#4ade80', dur: '1.8s', begin: '0.3s' },
            { href: '#p3', color: '#22d3ee', dur: '1.5s', begin: '0.6s' },
            { href: '#p4', color: '#fbbf24', dur: '2s',   begin: '0.9s' },
          ].map(({ href, color, dur, begin }, i) => (
            <circle key={i} r="2.5" fill={color} filter="url(#glow)" opacity="0.9">
              <animateMotion dur={dur} repeatCount="indefinite" begin={begin}>
                <mpath href={href} />
              </animateMotion>
            </circle>
          ))}
        </svg>

        {/* Node cards */}
        {nodes.map((n) => (
          <WorkflowNode
            key={n.id}
            icon={n.icon}
            label={n.label}
            color={n.color}
            accent={n.accent}
            style={{ top: n.top, left: n.left }}
          />
        ))}
      </div>

      {/* Activity feed */}
      <div className="px-5 py-3 border-t border-white/[0.06] space-y-2">
        {activities.map((a, i) => (
          <ActivityItem key={i} index={i} text={a.text} time={a.time} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Hero section ──────────────────────────────── */
export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => smoothScrollTo('contato');
  const scrollToHowItWorks = () => smoothScrollTo('como-funciona');

  const stats = [
    { value: 100, suffix: '%', label: 'Soluções Personalizadas' },
    { value: 60,  suffix: '%', label: 'Redução de Tarefas Repetitivas' },
    { value: 24,  suffix: '/7', label: 'Operação Contínua' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-void pt-16">

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-100" />

      {/* Radial glow — subtle cyan orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 600,
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.1) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text content ── */}
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-8 px-3.5 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-xs font-display font-semibold tracking-[0.18em] uppercase">
                Automação com Inteligência Artificial
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-tight text-white mb-6"
            >
              Sua empresa no{' '}
              <span className="text-gradient">Piloto Automático</span>
              <span className="block text-white/90 mt-1.5">enquanto você escala.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="text-white/50 text-lg md:text-xl max-w-lg leading-relaxed mb-10"
            >
              Automações com{' '}
              <span className="text-white/80 font-medium">IA sob medida</span>{' '}
              para empresas que valorizam eficiência, crescimento e zero desperdício de oportunidade.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.34 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2.5 bg-cyan-400 hover:bg-cyan-300 text-void px-7 py-3.5 rounded-xl font-display font-bold text-sm transition-all duration-200 shadow-glow-cyan hover:shadow-glow-cyan-md"
              >
                Agendar Diagnóstico Gratuito
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>

              <button
                onClick={scrollToHowItWorks}
                className="group inline-flex items-center gap-2 border border-white/[0.12] text-white/60 hover:text-white hover:border-white/[0.25] px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-200"
              >
                Ver Como Funciona
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white/35 text-xs">Diagnóstico 100% gratuito</span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white/35 text-xs">Sem contrato de longo prazo</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Workflow visualization ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex justify-end"
          >
            <WorkflowDashboard />
          </motion.div>

        </div>

        {/* ── Stats strip ── */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 border border-white/[0.07] rounded-2xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]"
          style={{ maxWidth: 640 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="px-8 py-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 group"
            >
              <div className="font-display font-extrabold text-4xl text-white mb-1 tabular-nums">
                {statsVisible
                  ? <AnimatedCounter to={stat.value} suffix={stat.suffix} duration={1400 + i * 200} />
                  : <span className="opacity-0">{stat.value}{stat.suffix}</span>}
              </div>
              <div className="text-white/40 text-sm">{stat.label}</div>
              <div className="mt-3 h-px w-6 bg-cyan-400/40 group-hover:w-12 group-hover:bg-cyan-400 transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
