import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFDF5",
        foreground: "#1E293B",
        muted: "#F1F5F9",
        "muted-foreground": "#64748B",
        accent: "#8B5CF6",
        "accent-foreground": "#FFFFFF",
        secondary: "#F472B6",
        tertiary: "#FBBF24",
        quaternary: "#34D399",
        border: "#E2E8F0",
        input: "#FFFFFF",
        card: "#FFFFFF",
        ring: "#8B5CF6",
      },
      fontFamily: {
        heading: ['"Outfit"', "system-ui", "sans-serif"],
        body: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        full: "9999px",
        blob: "2rem 2rem 2rem 0",
        arch: "9999px 9999px 0 0",
      },
      boxShadow: {
        pop: "4px 4px 0px 0px #1E293B",
        "pop-hover": "6px 6px 0px 0px #1E293B",
        "pop-active": "2px 2px 0px 0px #1E293B",
        "pop-card": "8px 8px 0px 0px #E2E8F0",
        "pop-card-pink": "8px 8px 0px 0px #F472B6",
        "pop-card-yellow": "8px 8px 0px 0px #FBBF24",
        "pop-card-green": "8px 8px 0px 0px #34D399",
        "pop-card-violet": "8px 8px 0px 0px #8B5CF6",
        "pop-focus": "4px 4px 0px 0px #8B5CF6",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(3deg)" },
          "75%": { transform: "rotate(-3deg)" },
        },
        "pop-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "70%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        "bounce-in": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "60%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
        "pop-in": "pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        "bounce-in": "bounce-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
