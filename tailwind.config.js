/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'green': '#00a795',
      'backgroundColor': '#1e1e20',
      'darkGreen': '#1e635c',
      'white': '#ffffff',
      'black': '#000000'
    },
  },
  plugins: [],
}
