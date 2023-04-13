/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        cubano: 'Cubano'
      }
    }
  },

  plugins: []
};

module.exports = config;
