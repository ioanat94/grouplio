/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'handwr': ['Dancing Script', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
