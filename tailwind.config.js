/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      'xs': '540px',
      // => @media (min-width: 540px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'mobile': '750px',
      // => @media (min-width: 744px) { ... }

      'md': '850px',
      // => @media (min-width: 800px) { ... }
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg2': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1654px',
      // => @media (min-width: 1654px) { ... }

      '4xl': '1954px',
      // => @media (min-width: 1954px) { ... }
    },
    extend: {
      width: {
        '100':"30rem",
        '110':"40rem",
      }
    },
  },
  plugins: [
            require('tailwind-scrollbar')({ nocompatible: true }),
            
           ],
}
