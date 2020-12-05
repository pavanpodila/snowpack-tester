// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/.dist',
    public: '/',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-webpack',
  ],
  // installOptions: {},
  // devOptions: {},
  buildOptions: {
    clean: true,
    baseUrl: '',
  },
};
