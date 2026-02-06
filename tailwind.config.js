/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jellyfinPurple: "#AA5CC3",
        jellyfinBlue: "#00A4DC",
        deepBg: "#07070A",
        deepPanel: "#0E0E14",
        deepBorder: "#1D1D28"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
