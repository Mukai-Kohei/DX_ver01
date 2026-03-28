/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0057B8",
          dark: "#003D82",
        },
        secondary: "#00A0E9",
        accent: "#E60012",
        bg: {
          white: "#FFFFFF",
          light: "#F5F7FA",
          dark: "#1A1A2E",
        },
        text: {
          main: "#333333",
          sub: "#666666",
          light: "#999999",
          white: "#FFFFFF",
        },
        border: "#E0E0E0",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        en: ["Montserrat", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
