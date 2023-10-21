/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs':'100px',
      'xs': '375px',
      'sm':  '550px',
      'md': '640px', 
      // => @media (min-width: 640px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      '2xl': '1221px',
      '3xl': '1536px',
          
    },
    extend: {},
  },
  plugins: [],
}