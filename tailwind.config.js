module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-background": "gradientBackground 15s ease infinite",
      },
      keyframes: {
        gradientBackground: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      fontFamily: {
        trench: ['"Trench Slab"', 'serif'],
      },
      colors: {
        'C5D5EA': '#C5D5EA',
        '759EB8': '#759EB8',
        '7392B7': '#7392B7',
        'B3C5D7': '#B3C5D7',
        'D8E1E9': '#D8E1E9',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
