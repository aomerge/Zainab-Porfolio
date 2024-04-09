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
      backgroundColor: {
        black: "#161616",
        primary: "#E43F21",
        secondary: "#1B1B1B",
      },
      textColor: {
        primary: "#E43F21",
        secondary: "#1B1B1B",
      },
      screens: {
        l: "1024px",
        xl: "1280px",
        sm: "300px",
        "2xl": "1500px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
export default config;
