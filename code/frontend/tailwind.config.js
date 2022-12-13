/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        'primary-green':"#90E605",
        'sub-green':"#CAF982",
        'primary-purple':"#C280FF",
        'sub-purple':"#EDD5FF",
        'primary-gray':"#7F7F7F",
        'sub-gray':"#F2F2F2"
      },
      height:{
        'hei-45':"45rem"
      },
    },
  },
  plugins: [],
}