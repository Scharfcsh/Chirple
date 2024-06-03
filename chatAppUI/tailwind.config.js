/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 14s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "20%": {
            transform: "translate(30px, -30px) scale(1.1)",
          },
          "33%": {
            transform: "translate(20px, -50px) scale(1)",
          },
          "41%": {
            transform: "translate(70px, -30px) scale(1.1)",
          },
          "52%": {
            transform: "translate(-30px, 50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, -20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}