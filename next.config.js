const headers = require('./headers');

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
  
  env: {
  },

  reactStrictMode: true,
  swcMinify: true,

  output: 'standalone', // <- Dockerfile Config (https://github.com/vercel/next.js/tree/canary/examples/with-docker#using-docker)
};
