const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.notion.com', // 프록시 대상 API 서버 주소
      changeOrigin: true,
      pathRewrite: { '^/api': '/' },
    })
  );
};
