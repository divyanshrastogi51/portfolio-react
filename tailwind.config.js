module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        mybackground: "url('./c.png')",
      },
      colors: {
        mycolor: {
          100: "#f2711c",
          200: "#ff5a00",
          300: "#ff7000",
          900: "#00b5ad",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
