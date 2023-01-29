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
        'blue-darker': '#C0DFFF',
        'pink-light': '#F9F0FF',
      },
      fontSize: {
        'title': '32px'
      }
    },
  },
  plugins: [],
}
