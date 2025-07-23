import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["var(--font-epilogue)", "sans-serif"],
        geist: ["var(--font-geist)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
