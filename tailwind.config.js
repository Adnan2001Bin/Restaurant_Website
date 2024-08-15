/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      fontFooter:["Dancing Script", "cursive"],
      fontFooter1: ["Poppins", "sans-serif"],

    }
  },
  plugins: [],
}