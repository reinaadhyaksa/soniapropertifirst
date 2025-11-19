/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ["Great Vibes", "cursive"],
        mont: ["Montserrat", "sans-serif"]
      }
    }

  },
  plugins: [],
  // Remove darkMode option completely - this disables dark mode
}