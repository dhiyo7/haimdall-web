/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        'retro-bg': '#f0f0f0',
        'retro-border': '#000000',
      },
      boxShadow: {
        'retro-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'retro': '4px 4px 0px 0px rgba(0,0,0,1)',
        'retro-lg': '6px 6px 0px 0px rgba(0,0,0,1)',
        'retro-xl': '8px 8px 0px 0px rgba(0,0,0,1)',
        'retro-gray': '4px 4px 0px 0px rgba(128,128,128,1)',
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}