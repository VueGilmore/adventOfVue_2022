/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: 'rgb(66 184 131)',
        },
      },
    ],
    darkMode: false,
  },
  theme: {
    extend: {
      colors: {
        green: '#42b883',
        'gray-dark': '#0f172a',
      },
    },
  },
}
