module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f2f9e8",
          100: "#daf0b0",
          600: "#6ba336",
          700: "#5B8F2E",
          800: "#4a7325"
        },
        arena: "#f7f3ec",
        eco: {
          ink:   "#102018",
          muted: "#5e6f66",
          green: "#184f36",
          green2:"#24684a",
          green3:"#0f3524",
          lime:  "#d7ff4d",
          sand:  "#efe7d8",
          paper: "#fbfbf7",
          bg:    "#f4f6ef",
        }
      },
      boxShadow: {
        suave:   "0 10px 30px rgba(0,0,0,0.08)",
        eco:     "0 24px 70px rgba(16,32,24,0.12)",
        "eco-sm":"0 10px 24px rgba(16,32,24,0.06)",
        "eco-lg":"0 36px 80px rgba(16,32,24,0.18)",
        lime:    "0 18px 34px rgba(190,235,55,0.28)",
      },
      borderRadius: {
        "4xl": "28px",
        "5xl": "38px",
      }
    }
  },
  plugins: []
};
