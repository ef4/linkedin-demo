var fs = require('fs');

// easiest way to grab these is from the Network tab in Chrome Dev Tools
var cookie = fs.readFileSync('linkedin-cookie', 'utf8');

module.exports = function(app) {
  var proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.get('/api/contact-suggestions', function(req, res, next){
    proxy.web(req, res, {
      target: 'https://www.linkedin.com',
      hostRewrite: true,
      changeOrigin: true,
      secure: true
    });
  });

  proxy.on('proxyReq', function(proxyReq, req, res, options) {
    var query = {
      "pageNum": "1",
      "boostID": "",
      "seed": "1430244966760",
      "location": "desktop-connect-hub-scroll",
      "trk": "connect_hub_load_more",
      "decorate": "false",
      "facetType": "",
      "facetID": "",
      "offset": "0",
      "records": "12"
    };
    Object.assign(query, req.query);
    proxyReq.path = '/people/pymk-connect-hub-scroll?' + Object.keys(query).map(key => `${key}=${query[key]}`).join('&');

    proxyReq.setHeader('Cookie', cookie);
  });
};
