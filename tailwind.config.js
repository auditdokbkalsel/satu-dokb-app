/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dokb-yellow': '#FACC15', // Kuning Kalsel
        'dokb-grey': '#1F2937',   // Abu-abu Gelap (Dark Grey)
        'dokb-accent': '#374151',
      },
    },
  },
  plugins: [],
}
