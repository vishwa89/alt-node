// modules
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');	
var fs = require('fs');

//stylus
var stylus = require('stylus');
function compile(str, path) {
  return stylus(str)
    .set('filename', path);
}

// mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://root:hh7357@ds053448.mongolab.com:53448/tv');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'conncetion error.'));
db.once('open', function callback() {
	console.log('database opened.');
});

// congfig
app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', path.join(__dirname, 'server/views'));
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

	//public
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(stylus.middleware({ 
	  	src: __dirname + '/public', 
	  	compile: compile
	}));
});

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// views
var Video = require('./server/models/video');
var videoTitle;
Video.findOne().exec(function(err, video) {
	if (err) throw err;
	videoTitle = video.title;
});

app.get('/partials/*', function(req, res){
	res.render('partials/' + req.params, {
  		videoTitle: videoTitle
  	});
});

app.get('*', function(req, res){
  	res.render('layout.jade', {
  		videoTitle: videoTitle
  	});
});

// server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

