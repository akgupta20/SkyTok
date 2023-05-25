/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      'xs': {'min': '300px', 'max': '600px'},
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}