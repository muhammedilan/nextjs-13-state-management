/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,jsx}", "./src/app/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
      },
      container: {
        padding: {
          DEFAULT: "1.5rem",
          sm: "2.5rem",
        },
        center: true,
      },
    },
  },
  plugins: [],
};
