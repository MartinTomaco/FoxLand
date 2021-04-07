/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  devOptions: {
    port: 8090,
  },
  buildOptions: {
    baseUrl: '',
  },
}
