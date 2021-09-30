module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./root/*.html"],
  },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        orange: {
          500: "#ff3e00",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
