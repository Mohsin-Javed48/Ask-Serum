/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        askBlue: "#40E0D0",
        serumYellow: "#FFA500 ",
      },
    },
  },
  plugins: [],
};
