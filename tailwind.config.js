/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#005bb5",           // Dark Blue from the logo
        "secondary": "#ff7e00",         // Orange from the logo
        "primary-light": "#00a2ff",     // Light blue from gradient
        "secondary-light": "#ffb400",   // Yellow/light orange from gradient
        "background": "#ffffff",
        "surface": "#f8f9fa",
        "surface-container": "#ffffff",
        "surface-container-low": "#f3f4f6",
        "surface-container-high": "#e5e7eb",
        "surface-container-lowest": "#ffffff",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-background": "#1f2937",
        "on-surface": "#111827",
        "on-surface-variant": "#4b5563",
        "outline": "#d1d5db",
        "outline-variant": "#e5e7eb",
        "primary-fixed": "#005bb5",
        "on-primary-fixed": "#ffffff",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Outfit", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
