/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        abel: ["Abel", "sans-serif"],
      },
      colors: {
        primary: "#E14753",
        onPrimary: "#FFFFFF",
        accent: "#DCECF9",
        background: "#3B71A1",
        background1: "#DAECFA",
      },
    },
  },
  plugins: [],
};
