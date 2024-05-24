/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#eea80a',
        'dark-yellow': '#d99800',
        orange: '#ff6100',
        red: '#c70402',
        green: '#3c6128',
        purple: '#93679b',
        background: '#fffefa',
      },
    },
  },
  plugins: [],
}
