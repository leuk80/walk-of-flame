/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        flame: {
          50: '#FFF8E1',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFA726',
          400: '#FF9800',
          500: '#FF5722',
          600: '#F44336',
          700: '#D32F2F',
          800: '#B71C1C',
          900: '#7F0000',
        },
        coal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#9E9E9E',
          300: '#757575',
          400: '#616161',
          500: '#424242',
          600: '#2D2D2D',
          700: '#1A1A1A',
          800: '#121212',
          900: '#0D0D0D',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'flame-pulse': 'flamePulse 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        flamePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(255,87,34,0.3)' },
          '100%': { textShadow: '0 0 20px rgba(255,87,34,0.6), 0 0 40px rgba(255,152,0,0.3)' },
        },
      },
    },
  },
  plugins: [],
};
