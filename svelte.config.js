const sveltePreprocess = require("svelte-preprocess");

const preprocess = sveltePreprocess({
  defaults: {
    script: 'typescript',
  },
  postcss: {
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
});

module.exports = {
  preprocess,
};
