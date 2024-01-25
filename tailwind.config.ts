import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#313552',
        pink: '#B8405E',
        mint: '#2EB086',
        white: '#EEE6CE',
      },
    },
    fontFamily: {
      bodyFont: ["Montserrat, sans-serif"],
      titleFont: ["Inter, sans-serif"],
    },
  },
  plugins: [],
};
export default config;
