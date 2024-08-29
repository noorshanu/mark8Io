/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manreg: ["Manrope-Regular"],
      manmed: ["Manrope-Medium"],
      manbold: ["Manrope-Bold"],
      mansemibold: ["Manrope-SemiBold"],
    },
    colors: {
      prime: "#005dff",
    },
    extend: {},
  },
  plugins: [],
};
