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
          "primary-relaxed": "var(--color-relaxed-primary)",
          secondary: "var(--color-secondary)",
          "light-primary": "var(--color-light-primary)",
          "on-primary": "var(--color-text-on-primary)",
        },
      },

      backgroundColor: {
        skin: {
          landfill: "var(--color-landfill)",
          secondary: "var(--color-secondary)",
          "primary-relaxed": "var(--color-relaxed-primary)",
          base: "var(--color-background)",
          card: ({ opacityValue }) => {
            if (opacityValue != undefined) {
              return `rgba(var(--color-card-background),${opacityValue})`;
            }
            return `rgb(var(--color-card-background))`;
          },
          "primary-relaxed": "var(--color-relaxed-primary)",
          "light-primary": "var(--color-light-primary)",
          "card-hover": "var(--color-primary-hover)",
          primary: "var(--color-primary)",
          muted: "var(--color-muted)",
          // primary: "var(--color-card-background)",
        },
      },

      borderColor: {
        skin: {
          secondary: "var(--color-secondary)",
          base: "var(--color-background)",
          muted: "var(--color-border-muted)",
          "primary-relaxed": "var(--color-relaxed-primary)",
          "light-primary": "var(--color-light-primary)",
          primary: "var(--color-primary)",
        },
      },

      colors: {
        landfill: "var(--color-landfill)",
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
  plugins: [
    require("tailwindcss-rtl"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
