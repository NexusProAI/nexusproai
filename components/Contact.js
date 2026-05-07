import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PaperAirplaneIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const CONTACT_INFO = [
  { icon: PhoneIcon,   title: 'Telefone',    value: '+55 (31) 99444-2517', desc: 'Seg–Sex: 8h às 18h',    color: '#22d3ee' },
  { icon: MapPinIcon,  title: 'Localização', value: 'Betim, MG',           desc: 'Presencial e remoto',   color: '#4ade80' },
  { icon: ClockIcon,   title: 'Horário',     value: '8h às 18h',           desc: 'Segunda a Sexta-feira', color: '#fbbf24' },
];

const SERVICES = [
  { value: 'chatbot-whatsapp',    label: 'Chatbot para WhatsApp' },
  { value: 'chatbot-instagram',   label: 'Chatbot para Instagram' },
  { value: 'agendamento-automatico', label: 'Agendamento Automático' },
  { value: 'qualificacao-leads',  label: 'Qualificação de Leads' },
  { value: 'consultoria-completa',label: 'Consultoria Completa' },
  { value: 'nao-sei',             label: 'Não sei ainda, quero conversar' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: '', service: 'chatbot-whatsapp',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'phone') {
      const digits = e.target.value.replace(/\D/g, '').slice(0, 11);
      let masked = digits;
      if (digits.length > 6) {
        masked = digits.length > 10
          ? `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`
          : `(${digits.slice(0,2)}) ${digits.slice(2,6)}-${digits.slice(6)}`;
      } else if (digits.length > 2) {
        masked = `(${digits.slice(0,2)}) ${digits.slice(2)}`;
      } else if (digits.length > 0) {
        masked = `(${digits}`;
      }
      setFormData({ ...formData, phone: masked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, company, message, service } = formData;

    const empty = [];
    if (!name?.trim())    empty.push('nome');
    if (!email?.trim())   empty.push('email');
    if (!phone?.trim())   empty.push('telefone');
    if (!company?.trim()) empty.push('empresa');
    if (!message?.trim()) empty.push('mensagem');

    if (empty.length > 0) {
      setSubmitStatus('error');
      setErrorMessage(`Preencha os campos: ${empty.join(', ')}`);
      setTimeout(() => { setSubmitStatus(null); setErrorMessage(''); }, 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim(), company: company.trim(), message: message.trim(), service, source: 'Site NexusProAI' }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Erro ao enviar');

      setFormData({ name: '', email: '', phone: '', company: '', message: '', service: 'chatbot-whatsapp' });
      setSubmitStatus('success');
      setIsSubmitting(false);
      setTimeout(() => { setSubmitStatus(null); }, 8000);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Erro ao enviar. Tente novamente.');
      setIsSubmitting(false);
      setTimeout(() => { setSubmitStatus(null); setErrorMessage(''); }, 3000);
    }
  };

  const inputClass = [
    'w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25',
    'bg-white/[0.04] border border-white/[0.08]',
    'focus:outline-none focus:ring-1 focus:ring-cyan-400/50 focus:border-cyan-400/40',
    'transition-all duration-200',
  ].join(' ');

  const labelClass = 'block text-xs font-display font-semibold text-white/45 uppercase tracking-[0.12em] mb-2';

  return (
    <section id="contato" className="relative py-28 bg-surface overflow-hidden scroll-mt-16">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-label mb-3 block">Contato</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight tracking-tight max-w-2xl">
            Pronto para o{' '}
            <span className="text-gradient">próximo nível?</span>
          </h2>
          <p className="mt-4 text-white/45 text-lg max-w-2xl leading-relaxed">
            Vamos conversar por{' '}
            <span className="text-white/75 font-semibold">30 minutos, sem compromisso</span>,
            {' '}para mostrar o potencial real da automação no seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
              <h3 className="font-display font-bold text-white text-lg mb-8">
                Informações de Contato
              </h3>

              <div className="space-y-5 flex-1">
                {CONTACT_INFO.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg flex-shrink-0 border transition-colors"
                      style={{ borderColor: `${info.color}25`, background: `${info.color}10` }}>
                      <info.icon className="h-4 w-4" style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-display font-semibold text-white/30 uppercase tracking-[0.1em] mb-0.5">
                        {info.title}
                      </div>
                      <div className="text-white/80 font-semibold text-sm">{info.value}</div>
                      <div className="text-white/30 text-xs">{info.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Online badge */}
              <div className="mt-8 p-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-xs font-display font-bold uppercase tracking-[0.12em]">
                    Online agora
                  </span>
                </div>
                <p className="text-emerald-400/50 text-sm">
                  Proposta em até 24 horas úteis.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display font-bold text-white text-lg mb-8">
                Agende seu Diagnóstico Gratuito
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Nome Completo *</label>
                    <input type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className={inputClass} placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>E-mail *</label>
                    <input type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className={inputClass} placeholder="seu@empresa.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className={labelClass}>Telefone *</label>
                    <input type="tel" id="phone" name="phone" required
                      value={formData.phone} onChange={handleChange}
                      className={inputClass} placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>Empresa *</label>
                    <input type="text" id="company" name="company" required
                      value={formData.company} onChange={handleChange}
                      className={inputClass} placeholder="Nome da sua empresa" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>Interesse Principal</label>
                  <select id="service" name="service"
                    value={formData.service} onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                    style={{ colorScheme: 'dark' }}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Qual seu maior desafio? *</label>
                  <textarea id="message" name="message" required rows={5}
                    value={formData.message} onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Ex: Perco muito tempo respondendo as mesmas perguntas no WhatsApp..."
                  />
                </div>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border text-sm font-medium ${
                      submitStatus === 'success'
                        ? 'bg-emerald-400/10 border-emerald-400/25 text-emerald-300'
                        : 'bg-red-400/10 border-red-400/25 text-red-300'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <span>
                        ✓ Mensagem recebida! Entraremos em contato em breve.{' '}
                        <a
                          href={`https://wa.me/5531994442517?text=${encodeURIComponent('Olá! Acabei de enviar uma mensagem pelo site da Nexus Pro e gostaria de conversar.')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-bold hover:text-emerald-200"
                        >
                          Falar agora pelo WhatsApp →
                        </a>
                      </span>
                    ) : (errorMessage || '✕ Preencha todos os campos obrigatórios.')}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  className={`w-full bg-cyan-400 hover:bg-cyan-300 text-void px-8 py-4 rounded-xl font-display font-bold text-sm transition-all duration-200 flex items-center justify-center gap-3 ${
                    isSubmitting ? 'opacity-60 cursor-not-allowed' : 'shadow-glow-cyan hover:shadow-glow-cyan-md'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-void/30 border-t-void rounded-full animate-spin" />
                      Agendando...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="h-4 w-4" />
                      Agendar Meu Diagnóstico Gratuito
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 pt-5 border-t border-white/[0.06] text-center">
                <p className="text-white/25 text-xs">
                  Seus dados estão seguros.{' '}
                  <a href="/politica-privacidade" target="_blank"
                    className="text-cyan-400/70 hover:text-cyan-400 transition-colors underline underline-offset-2">
                    Política de Privacidade
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
