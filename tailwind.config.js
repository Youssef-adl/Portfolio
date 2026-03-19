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
        'ln-grey-1': '#2E3321',
        'ln-grey-2': '#1A1D12',
        'ln-white': '#F0F2E8',
        'ln-accent': '#2f1df0',
      },
      fontFamily: {
        // Display: Space Grotesk — tech-forward, bold, futuristic
        'display': ['"Space Grotesk"', 'sans-serif'],
        // Impact fallback for ultra-compressed hero text
        'impact': ['Impact', 'Haettenschweiler', '"Arial Narrow Bold"', 'sans-serif'],
        // Body: DM Sans — clean, readable, modern
        'body': ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'ln-gradient': 'linear-gradient(180deg, #101400 0%, #1A1D12 100%)',
      },
      // Z-index management scale
      zIndex: {
        'nav': '50',
        'overlay': '30',
        'above': '20',
        'base': '10',
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'radar': 'radar 4s linear infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
      },
      keyframes: {
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'radar': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
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
