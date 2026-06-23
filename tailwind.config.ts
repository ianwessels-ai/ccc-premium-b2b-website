import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#031E49",
        gold: "#E5A823",
        slateCanvas: "#F8FAFC",
        bodyText: "#475569",
      },
      boxShadow: {
        premium: "0 18px 50px rgba(3, 30, 73, 0.08)",
      },
      borderRadius: {
        premium: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;