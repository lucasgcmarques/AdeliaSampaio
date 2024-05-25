/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#eea80a',
        orange: '#ff6100',
        red: '#c70402',
        green: '#3c6128',
        purple: '#93679b',
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(yellow|orange|red|green|purple)/,
    },
  ],
}
