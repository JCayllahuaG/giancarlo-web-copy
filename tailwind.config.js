/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#343947',
        secondary: '#3F4453'
      }
    },
  },
  plugins: [],
}

