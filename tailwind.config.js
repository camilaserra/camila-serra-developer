/** @type {import('tailwindcss').Config} */
const { join } = require('path')

module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: {
            50: '#949494',
          },
          pink: {
            20: '#ECCBE5',
            50: '#EAA6D0',
            100: '#F267BD',
            200: '#F267BD4c',
          },
          green: {
            100: '#C5E884',
          },
          blue: {
            50: '#258EB6',
            100: '#2482A5',
          },
          purple: {
            10: '#E5DEFF',
            50: '#5338CC',
            100: '#5338cc4c',
          },
          yellow: {
            100: '#DACE00',
          },
        },
      },
    },
  },
  plugins: [],
}
