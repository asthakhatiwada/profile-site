/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    root: { url: "/", static: true },
    public: { url: "/public", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
  ],
  devOptions: {
    open: "none",
  },
};
