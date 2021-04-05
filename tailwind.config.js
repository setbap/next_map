const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./src/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Vazir", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          "on-primary": "var(--color-text-on-primary)",
        },
      },

      backgroundColor: {
        skin: {
          secondary: "var(--color-secondary)",
          base: "var(--color-background)",
          card: "var(--color-card-background)",
          "card-hover": "var(--color-primary-hover)",
          primary: "var(--color-primary)",
          // primary: "var(--color-card-background)",
        },
      },

      borderColor: {
        skin: {
          secondary: "var(--color-secondary)",
          base: "var(--color-background)",
          primary: "var(--color-primary)",
        },
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),

            // ...
          },
        },
      }),
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
  plugins: [require("tailwindcss-rtl"), require("@tailwindcss/typography")],
};
