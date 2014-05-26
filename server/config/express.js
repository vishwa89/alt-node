var express = require('express');
var stylus = require('stylus');

module.exports = function(app, config) {
	console.log(config.rootPath);
	function compile(str, path) {
	  return stylus(str)
	    .set('filename', path);
	}

	app.configure(function() {
		app.set('port', process.env.PORT || 3000);
		app.set('views', config.rootPath + '/server/views');
		app.set('view engine', 'jade');

		app.use(express.favicon());
		app.use(express.logger('dev'));
		app.use(express.cookieParser());
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(function (req, res, next) {
			res.set('X-Powered-By', 'Propeller TV');
			next();
		});

		app.use(express.static(config.rootPath + '/public'));
		app.use(stylus.middleware({ 
		  	src: config.rootPath + '/public', 
		  	compile: compile
		}));
	});

	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}
}