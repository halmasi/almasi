import type { Config } from "tailwindcss";

const config: Config = {
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
      animation: {
        borderSpin: "borderSpin 3.6s linear infinite",
      },
      keyframes: {
        borderSpin: {
          "0%": { transform: "rotate(65deg)" },
          "25%": { transform: "rotate(-55deg)" },
          "50%": { transform: "rotate(-115deg)" },
          "75%": { transform: "rotate(-235deg)" },
          "99%": { transform: "rotate(-294deg)" },
          "100%": { transform: "rotate(-295deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
