var fs = require('fs');
var cookie = fs.readFileSync('linkedin-cookie', 'utf8');

module.exports = function(app) {
  var proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.get('/api/profile/:id', function(req, res, next){
    proxy.web(req, res, {
      target: 'https://www.linkedin.com',
      hostRewrite: true,
      changeOrigin: true,
      secure: true
    });
  });

  proxy.on('proxyReq', function(proxyReq, req, res, options) {
    var query = {
      id: req.params.id
    };
    Object.assign(query, req.query);
    proxyReq.path = '/profile/view?' + Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
    proxyReq.setHeader('Cookie', cookie);
  });
};
