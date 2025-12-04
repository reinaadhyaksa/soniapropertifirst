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
        mont: ["Montserrat", "sans-serif"],
        franklin: ['"Libre Franklin"', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        spartan: ['"League Spartan"', 'sans-serif'],
      }
    }

  },
  plugins: [],
  // Remove darkMode option completely - this disables dark mode
}