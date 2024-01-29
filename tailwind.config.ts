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
        blue: 'rgb(50, 0, 2)',
        pink: '#EEE6CE',
        white: '#B2BEB5',
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
