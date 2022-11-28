/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",   
      },
      fontFamily: {
        syneboldone: ["syne__"],
        syneregularone: ["syne___"],
        metropolisone: ["metropolisone"]
      },
    },
  },
  plugins: [],
}
