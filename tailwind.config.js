/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: 'rgb(var(--bg) / <alpha-value>)',
          soft: 'rgb(var(--bg-soft) / <alpha-value>)',
          card: 'rgb(var(--bg-card) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          dim: 'rgb(var(--ink-dim) / <alpha-value>)',
          mute: 'rgb(var(--ink-mute) / <alpha-value>)',
        },
        accent: {
          DEFAULT: '#1E40AF',
          deep: '#0F2A5C',
          mid: '#1E3A8A',
          glow: '#3B82F6',
          neon: '#60A5FA',
          cyan: '#22D3EE',
          warm: '#F59E0B',
          pink: '#F472B6',
          gold: '#FBBF24',
        },
        line: 'rgb(var(--line) / <alpha-value>)',
      },
      backgroundImage: {
        'grid-soft':
          'linear-gradient(to right, rgb(var(--grid) / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--grid) / 0.06) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(59,130,246,0.12), transparent 60%)',
        'logo-grad':
          'linear-gradient(135deg, #0F2A5C 0%, #1E40AF 30%, #3B82F6 60%, #60A5FA 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 12s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      boxShadow: {
        'glow-accent':
          '0 0 0 1px rgba(59,130,246,0.3), 0 0 20px -4px rgba(59,130,246,0.35), 0 16px 48px -16px rgba(30,64,175,0.4)',
        'soft': '0 4px 20px -4px rgba(15,23,42,0.08), 0 12px 40px -12px rgba(15,23,42,0.08)',
      },
    },
  },
  plugins: [],
}
