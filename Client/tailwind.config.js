module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(240deg 61% 10%)",
        secondary: "hsl(240deg 80% 98%)",
        "secondary-light": "hsl(240deg 80% 96%)",
        "secondary-dark": "hsl(240deg 80% 92%)",
        "light-white": "rgba(255,255,255,0.17)",
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
        nunito: ["Nunito",' sans - serif'],
      },
    },
  },
  plugins: [],
};
