module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
        'sm': { 'max': '767px'},
        // => @media (min-width: 640px) { ... }
      }
  },
  plugins: [],
}