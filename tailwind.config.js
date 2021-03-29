const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './src/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Vazir", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      spacing: {
        100: "45rem",
        97: "25rem",
        98: "26rem",
        99: "27rem",
        heightParent: "93rem",
        mapHeight: "11.5rem",
        mapWidth: "25rem",
        7.5: "62.5%",
      },
      fontWeight: {
        ultraFont: 999,
      },
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
}
