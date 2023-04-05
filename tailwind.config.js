/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b3b3b3",
        greenPrimary: "#1ed760",
        purple: "#450af5",
        greena: "#c4efd9",
        overlay: "rgba(0,0,0,0.3)",
      },
      fontFamily: {
        "circular-sp": ["CircularSp", "sans-serif"],
      },
    },
  },
  plugins: [],
};
