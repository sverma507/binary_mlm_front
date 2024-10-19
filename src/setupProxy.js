const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'https://sandbox-api.coinmarketcap.com',
      changeOrigin: true,
      pathRewrite: {
        '^/v1': '', // This rewrites /api to the base of CoinMarketCap API
      },
    })
  );
};
