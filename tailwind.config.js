/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '375px',
      'xs':  '550px',
      'sm': '640px', 
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      'xl': '1221px',
      '2xl': '1536px',
          
    },
    extend: {},
  },
  plugins: [],
}