/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       colors: {
        deepNavy: '#02023e'
      },
       animation: {
        'gradient-sweep': 'gradient-sweep 8s ease-in-out infinite',
        'gradient-glow': 'gradient-glow 10s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        'gradient-sweep': {
          '0%': { 'background-position': '-100% 0%' },
          '100%': { 'background-position': '100% 0%' }
        },
        'gradient-glow': {
          '0%': { 'background-position': '-120% 0%' },
          '100%': { 'background-position': '120% 0%' }
        },
        'fadeIn': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [],
};
