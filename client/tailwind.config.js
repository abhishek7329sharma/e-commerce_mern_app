
// const defaultTheme = require('tailwindcss/defaultTheme')
// module.exports = {
//   content: [
//     "./src/*/.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter var', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/aspect-ratio'), 
//     require('@tailwindcss/forms')
//   ],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [

    require('@tailwindcss/aspect-ratio'), 
    require('@tailwindcss/forms')
  ],
}