export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e5e5e5",
        secondary: {
          100: "#cccccc",
          200: "#7D8597",
          300: "#b7985d",
        },
        emphasis: "#e3b678",
        bg: "#171009",
      },
      backgroundColor: {
        default: {
          100: "#171009",
          200: "#251a10",
        },
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
