module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59"
        },
        arena: "#f7f3ec"
      },
      boxShadow: {
        suave: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
}
