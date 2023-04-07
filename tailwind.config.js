/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fluidContainer: {
      'default': {
        maxWidth: '800px', // defaults to null (no max width)
        padding: '15px', // defaults to '15px'
      },
    },
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
      }
    },
    colors: {
      transparent: 'transparent', 
      current: 'currentColor', 
      'white': '#fff', 

      'black': '#000', 
      'medium-black': '#393939',
      'medium-black2': '#343a40',
      
      'blue': '#0d6396',
      'light-blue': '#D2E6FA',
      'light-blue2': '#3C88CF',
      'light-blue3': '#E6EEF5',
      'light-blue4': '#D8E4F0',
      'light-blue5': '#E9F8FF',
      'light-blue6': '#AADBEA',
      'light-blue7': '#CDEAF3',
      'medium-blue': '#70adc7',
      'medium-blue2': '#0FC9E6',
      'medium-blue3': '#0d6efd',
      'dark-blue': '#0b5ed7',
      'dark-blue2': '#0a58ca',

      'light-gray': '#F5F5F5',
      'light-gray2': '#E1E1E1',
      'light-gray3': '#dee2e6',
      'light-gray4': '#eeeeee',
      'medium-gray': '#373737',
      'medium-gray2': '#727272',
      'medium-gray3': '#AFAFAF',
      'medium-gray4': '#8b99a7',
      'medium-gray5': '#C0C0C0',
      'medium-gray5': '#666666',

      'line': '#d1d1d1',
      'linear-blue1': '#EBF7FA',
      'linear-blue2': '#E6F4FA',

      'light-green': '#BFE9D6',
      'light-green2': '#E1F5EC',
      'medium-green': '#A7CFBD',
      'dark-green': '#26A76B',
      

      'light-cream': '#F8F8F8',

      
      'light-cream': '#F8F8F8',

      'medium-yellow': '#E8E6B4',

      'orange': '#C26A02',
      'progressbar': '#E0930C',
      
    },
    fontFamily: {
      body: ["Inter, sans-serif"],
      hd: ["Raleway, sans-serif"],
      icon: ["Nanum Gothic, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1170px',
        '2xl': '1200px',
      },
    },
  },
  variants: { // for the utilities
    extend: {},

    fluidContainer: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require("flowbite/plugin")
  ],
}