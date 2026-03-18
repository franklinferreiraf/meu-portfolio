/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Aquele fundo quase preto absoluto
        card: "#0f0f13",       // Fundo dos cards, sutilmente mais claro
        cardBorder: "#1f1f2e", // Borda bem suave para os cards
        primary: "#4F46E5",    // Roxo vibrante
        secondary: "#3B82F6",  // Azul neon
        accent: "#8B5CF6",     // Roxo mais claro pro gradiente
        muted: "#9CA3AF",      // Cinza para textos secundários e descrições
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fonte limpa e profissional
      },
    },
  },
  plugins: [],
}