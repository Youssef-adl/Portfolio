/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ln-lime': '#D2FF00',
        'ln-dark-green': '#101400',
        'ln-dark': '#060804',
        'ln-grey-1': '#1a1e12',
        'ln-grey-2': '#111409',
        'ln-white': '#f0f2e8',
        'ln-accent': '#c8ff00',
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'impact': ['Impact', 'Haettenschweiler', '"Arial Narrow Bold"', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif'],
      },
      zIndex: {
        'nav': '50',
        'overlay': '30',
        'above': '20',
        'base': '10',
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease forwards',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
