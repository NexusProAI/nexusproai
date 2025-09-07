import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PaperAirplaneIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'automacoes'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação simples
    const { name, email, phone, company, message } = formData;
    
    if (!name.trim() || !email.trim() || !phone.trim() || !company.trim() || !message.trim()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    // Mostrar loading imediatamente
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Processar após 800ms
    setTimeout(() => {
      try {
        // Log para debug
        console.log('Dados:', { name, email, phone, company, message });
        
        // Limpar formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: 'automacoes'
        });
        
        // Mostrar sucesso
        setSubmitStatus('success');
        setIsSubmitting(false);
        
        // Criar URL WhatsApp
        const msg = `Olá! Sou ${name} da ${company}.\n\nEmail: ${email}\nTelefone: ${phone}\n\nMensagem: ${message}`;
        const url = `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;
        
        // Abrir WhatsApp após 2 segundos
        setTimeout(() => {
          window.open(url, '_blank');
        }, 2000);
        
        // Limpar status após 6 segundos
        setTimeout(() => {
          setSubmitStatus(null);
        }, 6000);
        
      } catch (error) {
        console.error('Erro:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      }
    }, 800);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telefone',
      value: '+55 (11) 9999-9999',
      description: 'Seg-Sex: 8h às 18h'
    },
    {
      icon: EnvelopeIcon,
      title: 'E-mail',
      value: 'contato@nomeDaAgencia.com',
      description: 'Resposta em até 2h'
    },
    {
      icon: MapPinIcon,
      title: 'Localização',
      value: 'São Paulo, SP',
      description: 'Atendimento presencial e remoto'
    },
    {
      icon: ClockIcon,
      title: 'Horário',
      value: '8h às 18h',
      description: 'Segunda a Sexta-feira'
    }
  ];

  const services = [
    { value: 'chatbot-whatsapp', label: 'Chatbot para WhatsApp' },
    { value: 'chatbot-instagram', label: 'Chatbot para Instagram' },
    { value: 'agendamento-automatico', label: 'Agendamento Automático' },
    { value: 'qualificacao-leads', label: 'Qualificação de Leads' },
    { value: 'consultoria-completa', label: 'Consultoria Completa' },
    { value: 'nao-sei', label: 'Não sei ainda, quero conversar' }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pronto para colocar sua empresa{' '}
            <span className="text-gradient">no próximo nível?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vamos conversar por <span className="font-semibold text-primary-600">30 minutos, sem compromisso</span>, 
            para eu entender seu cenário e te mostrar o potencial de uma automação no seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-primary p-3 rounded-lg mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary-600 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-primary rounded-xl p-6 text-white">
                <h4 className="font-semibold mb-3">Resposta Rápida</h4>
                <p className="text-white/90 text-sm mb-4">
                  Receba uma proposta personalizada em até 24 horas úteis.
                </p>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Consultores online agora
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Agende seu Diagnóstico Gratuito
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="seu@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Interesse Principal
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Qual seu maior desafio atual? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Ex: Perco muito tempo respondendo as mesmas perguntas no WhatsApp, ou tenho dificuldade para agendar clientes, ou..."
                  />
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus === 'success' 
                      ? '✅ Mensagem recebida com sucesso! Redirecionando para WhatsApp em instantes...'
                      : '❌ Por favor, preencha todos os campos obrigatórios corretamente.'}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                      Agendando...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <PaperAirplaneIcon className="h-5 w-5 mr-3" />
                      Agendar Meu Diagnóstico Gratuito
                    </div>
                  )}
                </motion.button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-600 text-sm">
                  Seus dados estão seguros conosco. Leia nossa{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
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