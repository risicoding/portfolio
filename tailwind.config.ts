import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        preahvihear: ["var(--font-preahvihear)"],
      },
      colors: {
        primary: "#9857D3",
        secondary: "#2B0B3A",
      },
    },
  },
  plugins: [],
} satisfies Config;
