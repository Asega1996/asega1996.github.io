/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",
        secondary: "#0a192f",
        accent: "#ccd6f6",
        hover: "#52e0b2",
      },
    },
  },
  plugins: [],
};