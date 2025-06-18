/** @type {import('tailwindcss').config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,html,ts,jsx,tsx}",
  ],
  theme:{
    extend: {
      height: {
        'screen': '100vh'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
