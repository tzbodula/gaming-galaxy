const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: true,
  theme: {
      screens: {
        'xs': '320px',
         // => @media (min-width: 320px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        spacing: {
          '29': '7.25rem',
          '30': '7.38rem',
          '31': '7.75rem'
        }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'sunset-yellow': '#EEAF61',
        'sunset-orange': '#FB9062',
        'sunset-red': '#0C7489',
        'sunset-pink': '#F2542D',
        'sunset-purple': '#119DA4',
        'midnight-purple': '#541388',
        'midnight-blue': '#2E294E',
        'sunrise-blue': '#9381FF',
        'nightsky': '#100B2F',
        'gamedisplay': '#0F0F0F',
        'cloudy-day': '#EADEDA',
      },

      letterSpacing: {
        extralarge: '.5em',
      },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'oxanium-light': ['oxanium-light', 'sans-serif'],
        'oxanium-medium': ['oxanium-medium', 'sans-serif'],
        'oxanium-semibold': ['oxanium-semibold', 'sans-serif'],
        'oxanium-bold': ['oxanium-bold', 'sans-serif'],
        'oxanium-extrabold': ['oxanium-extrabold', 'sans-serif'],
        'dreamscape': ['dreamscape', 'sans-serif'],
        'dreamscape-text': ['dreamscape-sans', 'sans-serif'],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
  ],
};
