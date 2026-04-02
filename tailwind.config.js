/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1b1c2e',
        surface: '#22243d',
        surfaceHigh: '#2a2c4a',
        border: '#363858',
        accent: '#7c3aed',
        accentLight: '#a855f7',
        accentGlow: 'rgba(124,58,237,0.15)',
        textPrimary: '#f0f0f0',
        textSecondary: '#9fa6bc',
        textMuted: '#6e748f',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(124,58,237,0.4)' },
        },
      },
    },
  },
  plugins: [],
}
