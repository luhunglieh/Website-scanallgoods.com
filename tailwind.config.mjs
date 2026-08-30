/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#8DC21F',
          'green-dark': '#74a317',
          'green-light': '#a2d932',
          blue: '#3399CC',
          'blue-dark': '#287ba4',
          rose: '#BB5466',
          orange: '#E85700',
        },
        apple: {
          bg: '#f5f5f7',
          card: '#ffffff',
          border: '#e5e5ea',
          text: '#1d1d1f',
          muted: '#6e6e73',
          dark: '#161617',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"PingFang TC"',
          '"Noto Sans TC"',
          '"Helvetica Neue"',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
};