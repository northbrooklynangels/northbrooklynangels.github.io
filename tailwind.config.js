/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./site/layouts/**/*.html", "./content/**/*.{md,html}"],
  theme: {
    colors: {
      blue: "#49C8D8",
      darkblue: "#084C61",
      altblue: "#1172c7",
      red: colors.red,
      yellow: "#FFC857",
      gray: colors.neutral,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      current: colors.current,

      // Campaign layout colors, named by role. The values (light and dark) are CSS variables in src/css/_campaign.scss
      campaign: [
        "surface", "surface-warm", "surface-cool", "surface-bright", "surface-deep", "card",
        "fill", "fill-cool",
        "text", "heading", "link", "accent", "accent-cool"
      ].reduce((roles, role) => ({ ...roles, [role]: `rgb(var(--campaign-${role}) / <alpha-value>)` }), {})
    },
    fontFamily: {
      sans: defaultTheme.fontFamily.sans,
      serif: defaultTheme.fontFamily.serif,
      mono: defaultTheme.fontFamily.mono,
      header: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
      headerAlt: ['"Montserrat Variable"', "Montserrat", ...defaultTheme.fontFamily.sans],
      headerSerif: ["Georgia", ...defaultTheme.fontFamily.serif],

      // Campaign fonts, loaded in src/ts/index.ts
      display: ['"Fraunces Variable"', "Fraunces", "Georgia", ...defaultTheme.fontFamily.serif],
      copy: ["Poppins", ...defaultTheme.fontFamily.sans],
      script: ['"Caveat Variable"', "Caveat", "cursive"]
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