/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        accent:  { DEFAULT: 'rgb(var(--color-accent-rgb) / <alpha-value>)', light: '#a62b41' },
        warm:    { DEFAULT: 'rgb(var(--color-warm-rgb)  / <alpha-value>)', light: '#e3cfa8' },
        deep:    { DEFAULT: 'rgb(var(--color-deep-rgb)  / <alpha-value>)' },
        jade:    { DEFAULT: 'rgb(var(--color-jade-rgb)  / <alpha-value>)', light: '#2f8a72' },
        bg:      { primary: 'var(--color-bg-primary)', secondary: 'var(--color-bg-secondary)', card: 'var(--color-bg-card)', glass: 'var(--color-bg-glass)' },
        text:    { primary: 'var(--color-text-primary)', secondary: 'var(--color-text-secondary)', muted: 'var(--color-text-muted)' },
        border:  { DEFAULT: 'rgba(var(--color-accent-rgb), 0.1)', hover: 'rgba(var(--color-accent-rgb), 0.25)' },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        'serif-display': ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      zIndex: {
        'base': '1', 'elevated': '10', 'nav': '100',
        'overlay': '200', 'modal': '300', 'cursor': '400',
        'noise': '500', 'preloader': '600',
      },
      animation: {
        'gradient-shift': 'gradient-shift 4s linear infinite',
        'float':          'float 6s ease-in-out infinite',
        'float-slow':     'float-slow 8s ease-in-out infinite',
        'spin-slow':      'spin-slow 20s linear infinite',
        'pulse-dot':      'pulse-dot 2s ease-in-out infinite',
        'border-glow':    'border-glow 3s ease-in-out infinite',
        'marquee':        'marquee 35s linear infinite',
        'shimmer':        'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } },
        'float':         { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
        'float-slow':    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        'spin-slow':     { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'pulse-dot':     { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: 0.5, transform: 'scale(1.4)' } },
        'border-glow':   { '0%,100%': { boxShadow: '0 0 20px rgba(111,201,146,.12)' }, '50%': { boxShadow: '0 0 40px rgba(111,201,146,.25)' } },
        'marquee':       { '0%': { transform: 'translate3d(0,0,0)' }, '100%': { transform: 'translate3d(-50%,0,0)' } },
        'shimmer':       { '0%': { transform: 'translateX(-100%) skewX(-12deg)' }, '100%': { transform: 'translateX(200%) skewX(-12deg)' } },
      },
    },
  },
  plugins: [],
}
