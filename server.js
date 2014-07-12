// modules
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');	
var fs = require('fs');

var config = {
	db: 'mongodb://root:hh7357@ds053978.mongolab.com:53978/alt',
	rootPath: __dirname
}

require('./server/config/express')(app, config);
require('./server/config/mongodb')(config);
require('./server/config/route')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

