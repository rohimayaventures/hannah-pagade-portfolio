import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-mono)", "DM Mono", "monospace"],
      },
      colors: {
        obsidian: "#080C14",
        gold: "#C8A96E",
        cream: "#F4EFE6",
        "light-gray": "#F0EDE8",
        "mid-gray": "#C8C0B4",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
