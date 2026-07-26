/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0F1A",
        panel: "#111826",
        panel2: "#0D1420",
        hairline: "#22304A",
        hairline2: "#1A2436",
        fg: "#EDF1F7",
        muted: "#8592A6",
        dim: "#5B6A82",
        signal: "#FFB454",
        stream: "#5EEAD4",
        danger: "#FF6B6B",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(237,241,247,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(237,241,247,0.035) 1px, transparent 1px)",
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
