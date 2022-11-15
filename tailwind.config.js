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
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite': 'marquee 25s linear infinite',
      },
      colors: {
        "base": "#00001D",
        "primary": "#D68FD6",
        "accent": "#F9D2B4",
        "accent-2": "#B5FFE1",
        "base-2": "#0E0E52",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}