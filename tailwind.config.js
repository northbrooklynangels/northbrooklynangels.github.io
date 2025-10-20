/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./site/layouts/**/*.html", "./site/content/**/*.md", "./site/content/**/*.html"],
  theme: {
    colors: {
      blue: "#49C8D8",
      darkblue: "#084C61",
      altblue: "#1172c7",
      red: colors.red,
      yellow: "#FFC857",
      gray: colors.neutral,
      black: colors.black,
      white: colors.white
    },
    fontFamily: {
      sans: defaultTheme.fontFamily.sans,
      serif: defaultTheme.fontFamily.serif,
      mono: defaultTheme.fontFamily.mono,
      header: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
      headerAlt: ["Montserrat", ...defaultTheme.fontFamily.sans],
      headerSerif: ["Georgia", ...defaultTheme.fontFamily.serif]
    },
    screens: {
      "sm": "740px",
      "md": "820px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    extend: {
      gridTemplateColumns: {
        "auto": "repeat(auto-fit, minmax(100px, 1fr))"
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      display: ["dark"],
      fontWeight: ["active", "hover"],
      textColor: ["active"]
    },
    textOpacity: false
  },
  plugins: [],
};