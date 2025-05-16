/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/js/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        'trading-primary': 'hsl(var(--trading-primary))',
        'trading-secondary': 'hsl(var(--trading-secondary))',
      },
      container: {
        center: false,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}

