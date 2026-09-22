/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#12100C',
        'bg-soft': '#1A1712',
        'bg-deep': '#0C0A08',
        line: 'rgba(255,255,255,0.08)',
        ink: '#F2EDE4',
        'ink-dim': '#A69E92',
        'ink-faint': '#6E665C',
        accent: '#E8A33D',
        'accent-soft': 'rgba(232,163,61,0.16)',
      },
      fontFamily: {
        display: ['"Noto Serif SC"', '"Songti SC"', 'serif'],
        sans: ['"Noto Sans SC"', '"PingFang SC"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(232,163,61,0.35)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
