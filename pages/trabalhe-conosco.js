import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ArrowLeftIcon, 
  BriefcaseIcon, 
  UsersIcon, 
  RocketLaunchIcon,
  AcademicCapIcon,
  PaperAirplaneIcon,
  DocumentArrowUpIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function TrabalheConosco() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    linkedin: '',
    github: '',
    portfolio: '',
    message: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const goBack = () => {
    router.push('/');
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          linkedin: '',
          github: '',
          portfolio: '',
          message: '',
          resume: null
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') console.error('Erro ao enviar currículo:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  const benefits = [
    {
      icon: RocketLaunchIcon,
      title: 'Projetos Inovadores',
      description: 'Trabalhe com as mais modernas tecnologias de IA e automação do mercado'
    },
    {
      icon: AcademicCapIcon,
      title: 'Crescimento Contínuo',
      description: 'Investimos no seu desenvolvimento com cursos, certificações e mentorias'
    },
    {
      icon: UsersIcon,
      title: 'Ambiente Colaborativo',
      description: 'Time diverso e inclusivo focado em resultados e inovação'
    }
  ];

  const dreamTeamRoles = [
    {
      emoji: '🤖',
      title: 'Visionário em IA',
      description: 'Você sonha em código e pensa em algoritmos? Venha criar o futuro da inteligência artificial!',
      vibe: 'Para quem respira inovação'
    },
    {
      emoji: '⚡',
      title: 'Ninja da Automação',
      description: 'Se você consegue automatizar até o café da manhã, queremos você no nosso time!',
      vibe: 'Para quem ama eficiência'
    },
    {
      emoji: '🎨',
      title: 'Artista Digital',
      description: 'Transforme experiências complexas em interfaces incríveis e intuitivas.',
      vibe: 'Para quem vê beleza em tudo'
    },
    {
      emoji: '📊',
      title: 'Detetive de Dados',
      description: 'Desvende insights ocultos e transforme números em estratégias vencedoras.',
      vibe: 'Para quem ama mistérios'
    },
    {
      emoji: '🚀',
      title: 'Explorador Tech',
      description: 'Não encontrou seu perfil? Surpreenda-nos! Talentos únicos sempre têm espaço aqui.',
      vibe: 'Para quem é único'
    }
  ];

  return (
    <>
      <Head>
        <title>Trabalhe Conosco - Nexus Pro</title>
        <meta name="description" content="Faça parte da nossa equipe de inovação em IA. Venha transformar o futuro das empresas conosco." />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/flavicon.png" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={goBack}
              className="flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Voltar ao site
            </button>

            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center justify-center mb-6"
              >
                <BriefcaseIcon className="h-12 w-12 text-primary-600 mr-4" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Trabalhe Conosco
                  </h1>
                  <p className="text-xl text-gray-600 mt-2">
                    Faça parte da revolução da IA
                  </p>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              >
                Estamos em busca de talentos apaixonados por tecnologia e inovação. 
                Se você quer fazer parte de uma equipe que está transformando empresas 
                com Inteligência Artificial, este é o seu lugar!
              </motion.p>
            </div>

            {/* Por que trabalhar conosco */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Por que trabalhar conosco?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  >
                    <div className="bg-cyan-500 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Vagas em aberto */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🌟 Procuramos Pessoas Incríveis
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Não temos "vagas tradicionais" - temos oportunidades para talentos extraordinários!
                  Reconhece seu perfil em algum desses?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dreamTeamRoles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                  >
                    <div className="text-4xl mb-4">
                      {role.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {role.description}
                    </p>
                    <div className="bg-cyan-50 px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium text-primary-700">
                        {role.vibe}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center mt-12 p-8 bg-cyan-50 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  💡 Seu talento não se encaixa em nenhuma caixa?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Perfeito! Os melhores talentos raramente seguem padrões. Conte-nos sobre você!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-600">📍 Trabalho remoto, híbrido ou presencial</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-600">⏰ Horários flexíveis</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-600">🚀 Crescimento acelerado</span>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* Formulário */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Candidate-se Agora
              </h2>
              
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
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="seu@email.com"
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
                    <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                      Cargo de Interesse *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Com qual perfil você se identifica?</option>
                      <option value="visionario-ia">🤖 Visionário em IA</option>
                      <option value="ninja-automacao">⚡ Ninja da Automação</option>
                      <option value="artista-digital">🎨 Artista Digital</option>
                      <option value="detetive-dados">📊 Detetive de Dados</option>
                      <option value="explorador-tech">🚀 Explorador Tech</option>
                      <option value="talento-unico">✨ Talento único (conte-nos sobre você)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nível de Experiência *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Selecione seu nível</option>
                    <option value="junior">Júnior (0-2 anos)</option>
                    <option value="pleno">Pleno (3-5 anos)</option>
                    <option value="senior">Sênior (5+ anos)</option>
                    <option value="especialista">Especialista/Líder técnico</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-semibold text-gray-700 mb-2">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="https://linkedin.com/in/seu-perfil"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="github" className="block text-sm font-semibold text-gray-700 mb-2">
                      GitHub (Para devs)
                    </label>
                    <input
                      type="url"
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="https://github.com/seu-usuario"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-semibold text-gray-700 mb-2">
                    Portfolio/Site Pessoal
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="https://seu-portfolio.com"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                    Currículo (PDF) *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      accept=".pdf"
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                    <DocumentArrowUpIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Máximo 5MB, apenas PDF</p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Conte-nos sobre você *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Por que você gostaria de trabalhar conosco? Quais são suas principais qualidades? Conte sobre projetos relevantes..."
                  />
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    <div className="flex items-center">
                      {submitStatus === 'success' ? (
                        <CheckCircleIcon className="h-5 w-5 mr-2" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 mr-2" />
                      )}
                      {submitStatus === 'success' 
                        ? '✅ Currículo enviado com sucesso! Analisaremos e entraremos em contato.'
                        : '❌ Erro ao enviar currículo. Tente novamente ou envie por e-mail.'}
                    </div>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <PaperAirplaneIcon className="h-5 w-5 mr-3" />
                      Enviar Candidatura
                    </div>
                  )}
                </motion.button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-600 text-sm mb-2">
                  Seus dados estão seguros e serão utilizados apenas para processos seletivos.
                </p>
                <p className="text-gray-600 text-sm">
                  Dúvidas? Entre em contato: 
                  <a href="mailto:nexuspro@outlook.com" className="text-cyan-600 hover:text-cyan-700 ml-1">
                    nexuspro@outlook.com
                  </a>
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </>
  );
}