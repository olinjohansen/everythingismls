/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Near-black cinematic base
        ink: {
          DEFAULT: '#080808',
          900: '#080808',
          800: '#0e0e0f',
          700: '#161618',
          600: '#1f1f22',
          500: '#2a2a2e',
        },
        // Signature accent — a soft matte CRT cyan, electric but not luminous
        cyan: {
          DEFAULT: '#00D4D4',
          glow: '#00D4D4',
          dim: '#3ba8b0',
        },
        fog: '#c7d2d6',
      },
      fontFamily: {
        // All-caps tracked headlines
        display: ['"TeX Gyre Heros"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        // Body
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Citations, episode numbers, metadata
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        headline: '0.06em',
        wide2: '0.18em',
        wide3: '0.3em',
      },
      maxWidth: {
        prose2: '68ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
