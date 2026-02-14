/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#C9BCD4",
        herbalGreen: "#67A36F",
        mistGray: "#E6EBE8",
        roseCream: "#F5EDE8",
        forest: "#1E261B"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"]
      }
    }
  },
  plugins: []
};
