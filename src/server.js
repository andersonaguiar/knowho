'use strict';

var http    = require('http');
var app     = require('./app.js');
var server  = http.createServer(app);

server.listen(3000, 'localhost');
server.on('listening', function() {
  console.log('Running on port %s at %s', server.address().port, server.address().address);
});
