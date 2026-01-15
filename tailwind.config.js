/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1e8094",
        "background-light": "#f6f8f8",
        "background-dark": "#121d20",
        "neutral-charcoal": "#121617",
        "neutral-grey": "#f1f3f4"
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
}
