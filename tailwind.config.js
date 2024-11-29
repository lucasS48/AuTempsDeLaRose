/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FFD700', // Couleur or clair
          DEFAULT: '#B7CE66', // Couleur or classique    b0aa58
          dark: '#B8860B', // Couleur or foncé
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
