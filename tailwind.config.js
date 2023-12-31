/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-orange": "#ffe6c7",
        "deep-gray": "#454545",
        "burning-orange": "#ff6000",
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
    },
  },
  plugins: [],
};
