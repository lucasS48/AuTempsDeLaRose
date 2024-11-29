/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kollectif: ["'Kollectif'", "sans-serif"], // Ajoutez la famille ici
        sacramento: ["'Sacramento'", "sans-serif"],
      },
      colors: {
        gold: {
          light: '#C8D6A2', // Couleur or clair
          DEFAULT: '#B7CE66', // Couleur or classique    b0aa58
          dark: '#8FB43A', // Couleur or foncé
          veryDark: '#4B5943',
        },
        black: {
          DEFAULT: '#000000',
          soft: '#121212', // Noir doux
        },
      },
    },
  },
  plugins: [],
};
