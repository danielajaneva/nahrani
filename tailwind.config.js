// const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      // TypeScript
      "plugins/**/*.ts",
      "nuxt.config.ts",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // emerald: colors.emerald,
        // gray: colors.trueGray,
        lightGrey: "#f5f5f5",
        bgGrey: "#E5E5E5",
        darkGrey: "#F9F9F7",
        borderGrey: "#A4AC86",
        lightPink: "#FAEDD6",
        darkPink: "#FFF8EC",
        mainColor: "#656D4A",
        mainColorDark: "#4b5233",
        textMain: "#414833",
        divider: "#292929",
        dividerNav: "#EDEDED",
      },
      boxShadow: {
        cardShadow: "0px 0px 20px 0px #C4C4C4",
        cardShadowHo: "0px 0px 5px 0px #808080",
        navShadow: "0px 0px 10px 0px #808080",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
