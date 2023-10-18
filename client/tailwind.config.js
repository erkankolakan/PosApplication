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
        "yesil" :"#5BB318"
      },
    },
  },
  plugins: [],
}