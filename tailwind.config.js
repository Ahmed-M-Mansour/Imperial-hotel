/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gold: "#B7A580",
        navstate: "#F9F9F9",
        darkblue: "#2A3656",
        color3: "#616D81",
        color4: "#8C8F9D",
        aboutS: "#F9F9F9",
        aboutTitle: "#1A1313",
        text1: "#172B4D",
        text2: "#42526E",
        bgContacts: "#E8E8E8",
        bg1: "#F1F1F1",
        border1: "#BBC1CE",
      },
      fontFamily: {
        almarai: ["Almarai", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        homeBg: "url('../public/home-bg.svg')",
      },
    },
  },
  plugins: [],
};
