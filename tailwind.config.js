import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-dark': '#171717',
        'dark': '#28292F',
        'bx-color': '#363C43'
      },
    },
  },
  plugins: [
    daisyui
  ],
}