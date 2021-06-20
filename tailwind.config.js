module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      9999: 9999,
    },
  },

  height: {
    xl: "50rem",
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
