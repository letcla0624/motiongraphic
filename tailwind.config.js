module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1680px",
    },
    extend: {
      colors: {
        primary: {
          light: "#B0D2DE",
          DEFAULT: "#007FAB",
          dark: "#003A4F",
        },
        secondary: {
          light: "#FFE2A9",
          DEFAULT: "#FFC37D",
          dark: "#A46039",
        },
        highlight: {
          light: "#FFB5A4",
          DEFAULT: "#FF5136",
          dark: "#CD331A",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
