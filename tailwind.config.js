/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ./src/assets/photos/card1.jpg
      backgroundImage: theme => ({
        'hero-pattern': "url('https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
       })
    },
  },
  plugins: [],
}
