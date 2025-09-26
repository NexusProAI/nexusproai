import { motion } from 'framer-motion';
import { ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { fadeIn, fadeInUp, staggerContainer, staggerItem, defaultViewport } from '../lib/animations';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToComoFunciona = () => {
    document.getElementById('como-funciona').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary pt-32">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          {...fadeIn}
          className="flex items-center justify-center mb-6"
        >
          <SparklesIcon className="h-8 w-8 text-yellow-400 mr-3" />
          <span className="text-white/90 text-lg font-medium">
            Inovação em Inteligência Artificial
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Sua Empresa no{' '}
          <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Piloto Automático
          </span>
          <br />
          Seu Foco no que{' '}
          <span className="text-gradient bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Realmente Importa
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Automações com{' '}
          <span className="font-semibold text-cyan-300">Inteligência Artificial</span>{' '}
          para empresas de serviço e comércios que valorizam a{' '}
          <span className="font-semibold text-yellow-300">eficiência</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToContact}
            className="group bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center"
          >
            Agendar Diagnóstico Gratuito
            <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={scrollToComoFunciona}
            className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 flex items-center"
          >
            Ver Como Funciona
            <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 mb-20"
        >
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/70">Soluções Personalizadas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-white/70">Redução de Custos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/70">Operação Contínua</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="m19 14-7 7m0 0-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}