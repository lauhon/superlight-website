const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        contrast: "var(--color-background)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
        contrast: "var(--color-text-contrast)",
        small: "var(--color-small-text)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
        footer: "var(--color-background-footer)",
        input: "var(--color-input-background)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },

  plugins: [],
};
