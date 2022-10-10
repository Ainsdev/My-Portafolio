const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        "Questrial": ["Questrial", ...defaultTheme.fontFamily.sans],
      },
    },
    extend: {
      colors: {
        "base": "#00001D",
        "primary": "#D68FD6",
        "accent": "#F9D2B4",
        "accent-2": "#B5FFE1",
        "base-2": "#0E0E52",
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}