/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FE5F00',
        'black-100':'#100C0A',
        'border-color':'#E6E6E6',
        'secondary':'#FFF1E9',
        'gray-50':'#6D6D6D',
        'gray-25':'#E1E1E1'
      },
      screens:{
        '3xl':'1700px',
        'sm-2':"460px"
      }
    },
  },
  plugins: [],
}