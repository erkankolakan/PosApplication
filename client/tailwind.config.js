/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        card:"repeat(auto-fill, minmax(150px , 1fr))"
      },
      
      colors: {
        "tomato": "#ff6347",
        "yesil" :"rgb(21 128 61)"
      },
    },
  },
  plugins: [],
}