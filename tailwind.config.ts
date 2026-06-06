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
        navy: {
          DEFAULT: "#0A1628",
          light: "#1E3A5F",
          dark: "#060D1A",
        },
        gold: {
          DEFAULT: "#F4A825",
          light: "#F8C55A",
          dark: "#C8871A",
        },
        sky: "#4A9EFF",
        cream: "#FDF8F3",
        paper: "#FAF6F0",
        sand: "#F3EDE4",
        mist: "#EEF2F6",
        pearl: "#FFFBF7",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "scroll-up": "scrollUp 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
        blob: "blob 15s ease-in-out infinite",
      },
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
