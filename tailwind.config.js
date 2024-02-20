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
            10: '#FF30B8',
          },
          blue: {
            50: '#0F7090',
          },
          purple: {
            10: '#9124A2',
            20: '#9124A24c',
          },
        },
      },
    },
  },
  plugins: [],
}
