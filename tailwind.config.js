/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./client/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var"]
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
