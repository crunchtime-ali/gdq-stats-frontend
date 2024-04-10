/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      fontFamily: {
        cubano: 'Cubano',
      },
      colors: {
        primary: '#00AEEF',
        'primary-hover': '#23527c',
        secondary: '#F21847',
        'secondary-hover': '#A20023',
        darkGray: '#333',
        mediumDarkGray: '#666',
        mediumGray: '#DDD',
        lightGray: '#EEE',
      },
    },
  },

  plugins: [],
};

module.exports = config;
