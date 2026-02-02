/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'berlin-red': '#8b0000',
        'berlin-gold': '#c8a865',
      },
    },
  },
  plugins: [],
}
