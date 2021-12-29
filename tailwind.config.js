module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        currentColor: "currentColor",
        "dark-blue-1": "hsl(217, 28%, 15%)",
        "dark-blue-2": "hsl(218, 28%, 13%)",
        "dark-blue-3": "hsl(216, 53%, 9%)",
        "dark-blue-4": "hsl(219, 30%, 18%)",
        "cyan-1": "hsl(176, 68%, 64%)",
        "blue-1": "hsl(198, 60%, 50%)",
        "light-red": "hsl(0, 100%, 63%)",
        "white-1": "hsl(0, 0%, 100%)",
      },
      screen: {
        "sm": "375px",
        "md": "768px",
        "lg": "1024px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
