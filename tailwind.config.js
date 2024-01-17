/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-orange": "#ffe6c7",
        "deep-gray": "#454545",
        "burning-orange": "#ff6000",
        "secondary-orange": "#FF7700",
        "peach-highlight": "#ffa559",
        "peach-light": "#ffe6c7",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        sans: ["Courier", "monospace"],
      },
      keyframes: {
        spuggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        shootup: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1", transform: "translate(42px, 18px)" },
          "90%": { opacity: "0.88" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        spuggle: "spuggle 1s ease-in-out infinite",
        shootup: "",
      },
    },
  },
  plugins: [],
};
