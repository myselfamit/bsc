/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indian-red': '#e94b3c',
        'indian-yellow': '#f9c941',
        'indian-green': '#2a9d8f',
      },
    },
  },
  plugins: [],
}