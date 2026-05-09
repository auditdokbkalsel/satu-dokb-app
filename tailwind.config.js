/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dokb-yellow': '#FACC15', 
        'dokb-grey': '#334155',   // Lebih terang (Slate-700)
        'dokb-accent': '#475569',
      },
    },
  },
  plugins: [],
}
