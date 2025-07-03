/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   extend: {
      colors: {
        'earth-dark': '#3B2F2F',
        'earth-mid':  '#5A463A',
        'earth-light': '#F5EFE6',
        'earth-deep':  '#8B5E3C',
        'green-dark': '#3E4E3C',
        'green-warm': '#4B5D47',
        'green-light': '#D8E3D0',
        'green-deep': '#6D8B63',
        'earth-warm': '#feffed',
        'new-earth-warm': '#fbfcea',
      },
    },
  },
  plugins: [],
}
