const colors = require("tailwindcss/colors");

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
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontWeight: ["active", "hover"],
      textColor: ["active"]
    },
  },
  plugins: [],
};