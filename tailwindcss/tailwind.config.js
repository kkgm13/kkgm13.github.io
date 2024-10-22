/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./assets/css/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      keyframes: {
        flash: {
          '0%, 100%': { color: 'white', transform: 'scale(1)'},
          '50%': { color: '#FFD700', transform: 'scale(1.2)'},
        },
      },
      animation: {
        // flash: 'flash 1s ease-in-out infinite',
        flash: 'flash 0.5s linear infinite',
      },
    },
  },
  plugins: [],
}

