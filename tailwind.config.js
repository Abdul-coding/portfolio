/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Two light page shades
        ink: "#F3F6FA", // primary light (cool mist)
        panel: "#E4EBF4", // secondary light (soft slate)
        panel2: "#D8E1ED", // nested surfaces
        hairline: "#C3CEDC",
        hairline2: "#A8B6C9",
        fg: "#0F1B2D",
        muted: "#4F6078",
        dim: "#7A8BA0",
        signal: "#D97706",
        stream: "#0F766E",
        danger: "#DC2626",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(15,27,45,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(15,27,45,0.045) 1px, transparent 1px)",
        "page-wash":
          "linear-gradient(165deg, #F3F6FA 0%, #F3F6FA 42%, #E4EBF4 42%, #E4EBF4 100%)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scan: "scan 2.4s linear infinite",
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
