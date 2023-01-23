/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'blue-light': '#E2F1FF',
        'blue-darker': '#C0DFFF'
      },
      maxWidth: {
        'max-screen-view': 'calc(100vw - 30%)'
      }
    },
  },
  plugins: [],
}
