import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { smoothScrollTo } from '../utils/scroll';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prev = window.scrollY;
    const handleScroll = () => {
      const curr = window.scrollY;
      setIsScrolled(curr > 60);
      if (curr < 10) {
        setIsVisible(true);
      } else if (curr < prev) {
        setIsVisible(true);
      } else if (curr > prev && curr > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
      prev = curr;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    smoothScrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Início',      id: 'hero'          },
    { name: 'Serviços',    id: 'servicos'      },
    { name: 'Processo',    id: 'como-funciona' },
    { name: 'Resultados',  id: 'depoimentos'   },
    { name: 'Contato',     id: 'contato'       },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: isVisible ? 0 : -80 }}
      transition={{ duration: 0.28, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-void/80 backdrop-blur-xl border-b border-white/[0.06] shadow-glass'
          : 'bg-transparent'
      }`}
    >
      {/* Top accent line — only visible when not scrolled */}
      {!isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection('hero')}
          >
            <Image
              src="/logomarca.png"
              alt="Nexus Pro — Automação com IA"
              width={200}
              height={80}
              className="h-16 w-auto object-contain brightness-0 invert opacity-90"
              priority
            />
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contato')}
              className="relative px-5 py-2 rounded-lg text-sm font-display font-semibold text-void bg-cyan-400 hover:bg-cyan-300 transition-colors duration-200 shadow-glow-cyan"
            >
              Falar Conosco
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen
              ? <XMarkIcon className="h-5 w-5" />
              : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-void/95 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors duration-150 text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 border-t border-white/[0.06]">
                <button
                  onClick={() => scrollToSection('contato')}
                  className="block w-full bg-cyan-400 hover:bg-cyan-300 text-void px-4 py-3 rounded-lg font-display font-semibold transition-colors text-sm text-center"
                >
                  Falar Conosco
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
