import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/extensions/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      colors: {
        background: "#fff",
        backgroundDark: "#1e2128",
        border: "#f2f3fb",
        borderDark: "#35373e",
        accent: "#006d77",
        text: "#2b2d41",
        textDark: "#f1f1f1",
        text2: "#2b2d41",
        text2Dark: "#c5c6ca",
        text3: "#717171",
        text3Dark: "#a5a5ae",
        preSelect: "#ededed",
        preSelectDark: "#313540",
        select: "#e5e5e5",
        selectDark: "#17191e",
        bgFavicon: "#f2f2f2",
        bgFaviconDark: "#585860",
        discarded: "grey",
        discardedDark: "#55585d",
        shortcut: "#f2f2f2",
        shortcutDark: "#585860",
      },
      width: {
        window: "702px",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        gradient: "gradient 8s linear infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
export default config;
