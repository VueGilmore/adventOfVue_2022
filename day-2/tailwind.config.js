/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: {
        green: '#42b883',
        'green-darker': '#38936a',
        'gray-dark': '#0f172a',
      },
    },
  },
}
