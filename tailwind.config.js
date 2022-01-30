const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        fb: {
          100: '#f1f2f6',
          200: '#e7f3ff',
          300: '#e5e6eb',
          400: '#45bd63',
          500: '#ea4660',
          600: '#edb942',
          700: '#f0f2f5',
          800: '#606770',
          900: '#1a74e4',
        },
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
}
