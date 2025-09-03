/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // optional, for dark mode
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // <-- add this line
  daisyui: {
    themes: ["light", "dark", "cupcake"], // optional, choose themes
    darkTheme: "dark", // optional, default dark theme
  },
};
