const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  purge: {
    content: ["./site/layouts/**/*.html", "./site/content/**/*.md", "./site/content/**/*.html"],
  },
  theme: {
    colors: {
      blue: "#49C8D8",
      darkblue: "#084C61",
      red: colors.red,
      yellow: "#FFC857",
      gray: colors.trueGray,
      black: colors.black,
      white: colors.white
    },
    fontFamily: {
      sans: defaultTheme.fontFamily.sans,
      serif: defaultTheme.fontFamily.serif,
      mono: defaultTheme.fontFamily.mono,
      headers: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontWeight: ["active", "hover"],
      textColor: ["active"]
    },
    textOpacity: false
  },
  plugins: [],
};