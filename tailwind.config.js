/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [],
  purge:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  darkMode:false,

  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
