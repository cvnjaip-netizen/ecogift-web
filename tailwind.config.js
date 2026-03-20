module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f9e8",
          100: "#daf0b0",
          600: "#6ba336",
          700: "#5B8F2E",
          800: "#4a7325"
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