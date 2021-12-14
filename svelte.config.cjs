const preprocess = require("svelte-preprocess");

const config = {
  preprocess: [
    preprocess({
      scss: {
        prependData: '@import "src/variables.scss";',
      },

      postcss: true,
    }),
  ],
};

module.exports = config;
