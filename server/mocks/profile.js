module.exports = function(app) {
  var express = require('express');
  var profileRouter = express.Router();

  profileRouter.get('/:id', function(req, res) {
    res.set('Content-Type', 'text/html');
    var body = htmlDump[req.params.id];
    if (body) {
      res.send(body);
    } else {
      res.status(404).end();
    }
  });
  app.use('/mock-api/profile', profileRouter);
};

var htmlDump = {
  "123456": "<!DOCTYPE html><html><body>This is where a copy of a real profile page could go. But I'm not publishing copies of real people's profiles to github.</body></html>"
};
