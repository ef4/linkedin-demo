module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  router.get('/', function(req, res) {
    res.send({
      "oops": "In my talk I showed the use of these mocks, but I don't want to publish a copy of real people's profiles directly to github"
    }); });

  app.use('/mock-api/contact-suggestions', router);
};
