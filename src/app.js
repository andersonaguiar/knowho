'use strict';

var express = require('express');
var routes  = express();

routes.get('/', function(req, res) {
  res.sendFile('public/index.html', {root: __dirname });
});

routes.use(express.static('src'));

module.exports = routes;
