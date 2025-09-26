import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Define se o navbar deve ter background
      setIsScrolled(currentScrollY > 50);
      
      // Define se o navbar deve aparecer ou desaparecer
      if (currentScrollY < 10) {
        // Se está no topo da página, sempre mostrar
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Rolando para cima - mostrar navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Rolando para baixo e não está no topo - esconder navbar
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Fecha o menu mobile se estiver aberto
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    if (navRef.current) {
      navRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navRef.current) {
        navRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Benefícios', id: 'beneficios' },
    { name: 'Como Funciona', id: 'como-funciona' },
    { name: 'Depoimentos', id: 'depoimentos' },
    { name: 'Contato', id: 'contato' }
  ];

  const dynamicGradient = {
    background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(34, 211, 238, 0.15), 
                  rgba(16, 185, 129, 0.1), 
                  rgba(59, 130, 246, 0.15), 
                  rgba(34, 197, 94, 0.08)),
                 linear-gradient(to right, 
                  rgba(165, 243, 252, ${isScrolled ? '0.95' : '0.85'}), 
                  rgba(236, 253, 245, ${isScrolled ? '0.95' : '0.85'}), 
                  rgba(219, 234, 254, ${isScrolled ? '0.95' : '0.85'}))`
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-2xl' : 'shadow-lg'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } backdrop-blur-md transform`}
      style={dynamicGradient}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <Image
              src="/logomarca.png"
              alt="Nexus Pro - Automação Inteligente com IA para Empresas"
              width={360}
              height={144}
              className="h-36 w-auto object-contain relative z-10"
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform rounded-lg text-slate-700 hover:text-slate-900 hover:bg-white/60 hover:shadow-md"
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ml-4"
            >
              Falar Conosco
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-lg transition-colors duration-300 text-slate-700 hover:text-slate-900 hover:bg-white/60"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-gradient-to-r from-cyan-100 via-emerald-50 to-blue-100 shadow-2xl backdrop-blur-md border-t border-slate-200"
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-white/60 rounded-lg transition-colors duration-300 text-base font-medium hover:shadow-sm"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-colors duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Falar Conosco
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}