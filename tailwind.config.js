/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#053D41",
        mango: "#F58342",
        bw: "#1B1B1B",
        bw50: "#999999",
        bw75: "#535353",
        bw35: "#E3E3E3",
        bw15: "#F8F8F8",
        primaryGreen: "#053D41",
      },
    },
  },
  plugins: [],
};
