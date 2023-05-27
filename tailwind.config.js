const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: true,
  theme: {
      screens: {
        '2xs': '320px',
        
        'xs': '420px',
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
        'peach': '#F5A062',
        'sunset-orange': '#FB9062',
        'sunset-red': '#EE5D6C',
        'strawberry': "#D95380",
        'sunset-pink': '#ce4993',
        'plum': '#972B8B',
        'sunset-purple': '#EE5D6C',
        'midnight-purple': '#1A031F',
        'nightsky': '#10061B',
        'gamedisplay': '#0F0F0F',
        'cloudy-day': '#F1F0F9',
      },

      letterSpacing: {
        extralarge: '.5em',
      },

      fontFamily: {
        'oxanium-light': ['oxanium-light', 'sans-serif'],
        'oxanium-medium': ['oxanium-medium', 'sans-serif'],
        'oxanium-semibold': ['oxanium-semibold', 'sans-serif'],
        'oxanium-bold': ['oxanium-bold', 'sans-serif'],
        'oxanium-extrabold': ['oxanium-extrabold', 'sans-serif'],
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
