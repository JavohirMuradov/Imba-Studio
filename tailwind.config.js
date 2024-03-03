/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'poppins': ["Poppins"],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url(./src/Home/Images/background_hero.jpg)",
        'bg-main': "url(./src/Home/Images/back.jpg)",
        'section3': "url(./src/Home/Images/back 2.jpg)",
        'photo-sediting': "url(./src/Photo Editing/Images/background+overlay2.jpg)",
        'photo-seditingCard1': "url(./src/Photo Editxing/Images/background+overlay2.jpg)",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        grey: '#F5F5F5',
        heroColor: '#DDDDDD',
      }
    },
  },
  plugins: [],
})

