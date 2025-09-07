// Configurações otimizadas de animação para melhor performance

// Animações básicas com configurações otimizadas
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Animação com stagger para listas (mais eficiente)
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Configurações globais para reduzir cálculos
export const reducedMotion = {
  transition: { duration: 0.2 }
};

// Viewport otimizado para melhor performance
export const defaultViewport = { 
  once: true, 
  margin: "-100px 0px" 
};

// Animações de hover otimizadas
export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const buttonHover = {
  whileHover: { scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 10 }
};