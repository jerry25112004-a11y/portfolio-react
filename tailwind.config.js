/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff3b3b',
        'primary-dark': '#d60000',
        'primary-light': '#ff6060',
        base: '#090909',
        dark: '#111111',
        card: '#1b1b1b',
      },
      fontFamily: {
        poppins: ["'Poppins'", 'sans-serif'],
      },
      boxShadow: {
        red: '0 15px 40px rgba(255,0,0,.18)',
        'red-lg': '0 20px 45px rgba(255,0,0,.25)',
      },
      keyframes: {
        floatImage: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(50px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(60px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        progressAnim: {
          from: { width: '0' },
        },
      },
      animation: {
        floatImage: 'floatImage 4s ease-in-out infinite',
        fadeUp: 'fadeUp .8s ease both',
        slideUp: 'slideUp .8s ease',
      },
    },
  },
  plugins: [],
}
