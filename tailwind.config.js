/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xounity-orange': '#ff9705',
        'xounity-blue': '#090529',
      }
    },
  },
  plugins: [],
}

