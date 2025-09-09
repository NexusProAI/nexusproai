import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ChevronUpIcon 
} from '@heroicons/react/24/outline';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    { name: 'Automações Inteligentes', href: '#' },
    { name: 'Análise de Dados', href: '#' },
    { name: 'IA para Processos', href: '#' },
    { name: 'Consultoria Estratégica', href: '#' },
    { name: 'Business Intelligence', href: '#' },
    { name: 'Machine Learning', href: '#' }
  ];

  const resources = [
    { name: 'FAQ', href: '#' },
    { name: 'Suporte', href: '#' },
    { name: 'Trabalhe Conosco', href: '/trabalhe-conosco' }
  ];

  const legal = [
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'LGPD', href: '/lgpd' },
    { name: 'Cookies', href: '/cookies' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
                  Nexus Pro
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Especialistas em Inteligência Artificial, transformando desafios 
                  empresariais em oportunidades de crescimento sustentável.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 text-primary-400 mr-3" />
                  <a href="mailto:contato@nexuspro.com.br" className="text-gray-400 hover:text-white transition-colors">
                    contato@nexuspro.com.br
                  </a>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-primary-400 mr-3" />
                  <a href="tel:+5511999999999" className="text-gray-400 hover:text-white transition-colors">
                    +55 (11) 9999-9999
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 text-primary-400 mr-3" />
                  <span className="text-gray-400">Betim, MG - Brasil</span>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <a href="https://instagram.com/nexusproai" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/nexusproai" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href).scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        // Scroll to contato section instead of broken links
                        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-white transition-colors text-left"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Recursos</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    {resource.href === '#' ? (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          // Scroll to contato section for resources
                          document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-gray-400 hover:text-white transition-colors text-left"
                      >
                        {resource.name}
                      </button>
                    ) : (
                      <a href={resource.href} className="text-gray-400 hover:text-white transition-colors">
                        {resource.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2024 Nexus Pro. Todos os direitos reservados.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6 mb-4 md:mb-0"
            >
              {legal.map((item, index) => (
                <a key={index} href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {item.name}
                </a>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <ChevronUpIcon className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>

      <a 
        href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre suas soluções de IA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <svg 
          fill="currentColor" 
          className="h-8 w-8" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
        </svg>
      </a>
    </footer>
  );
}