/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefinslab: ["'JosefinSlab'", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#A9890A",
        },
        grey: {
          DEFAULT: "#292D32",
        },
      },
    },
  },
  plugins: [],
};
