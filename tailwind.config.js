/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bar-dark': '#1a0f0f',
        'bar-darker': '#0d0606',
        'neon-green': '#39ff14',
        'neon-pink': '#ff10f0',
        'beer-gold': '#f4a900',
      },
    },
  },
  plugins: [],
}

