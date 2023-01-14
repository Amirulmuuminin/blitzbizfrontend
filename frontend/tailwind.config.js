/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '12.5': '3.125rem',
        '13': '3.25rem',
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [require("daisyui")],
}
