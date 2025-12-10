/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fonda: {
          beige: "#E4DBBF",
          black: "#000000",
          wine: "#471D19",
        }
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
