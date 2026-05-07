/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
        display: ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        void: '#030712',
        surface: '#0d1117',
        elevated: '#161b22',
      },
      backgroundImage: {
        'grid-dark': [
          'linear-gradient(rgba(255,255,255,0.024) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px)',
        ].join(', '),
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        flow: 'flow 2s linear infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        flow: {
          from: { strokeDashoffset: '40' },
          to: { strokeDashoffset: '0' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 24px rgba(6,182,212,0.18)',
        'glow-cyan-md': '0 0 48px rgba(6,182,212,0.25)',
        glass: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
    },
  },
  plugins: [],
};
