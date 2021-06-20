const withImages = require("next-images");

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  ...withImages(),
  future: {
    webpack5: true,
  },
};
