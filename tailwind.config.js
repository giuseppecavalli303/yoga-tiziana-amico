/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sabbia — sfondi caldi e luminosi
        sand: {
          50: "#FDFBF8",
          100: "#F8F4EE",
          200: "#F1EAE0",
          300: "#E4D9C9",
          400: "#D3C4AF",
        },
        // Salvia — colore identitario, calma vegetale
        sage: {
          50: "#F2F5F2",
          100: "#E2E9E3",
          200: "#C7D4C8",
          300: "#A7B9A9",
          400: "#8DA290",
          500: "#728874",
          600: "#5B6F5E",
          700: "#48594B",
          800: "#38463B",
          900: "#2B362D",
        },
        // Creta — accento caldo, usato con parsimonia
        clay: {
          200: "#EBD7C8",
          400: "#C99B7E",
          500: "#B4835F",
          600: "#96694A",
        },
        // Verde WhatsApp smorzato: riconoscibile ma poco acceso
        whatsapp: {
          400: "#6E9E80",
          500: "#5C8A6D",
          600: "#4C7359",
        },
        ink: "#2E3630",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.08)", opacity: "0.85" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        breathe: "breathe 9s ease-in-out infinite",
        rise: "rise 1s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
