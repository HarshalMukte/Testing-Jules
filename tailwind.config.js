/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3b82f6",
        "primary-dark": "#2563eb",
        "surface": "#ffffff",
        "background": "#f8fafc",
        "accent": "#eff6ff",
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "full": "9999px"
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
