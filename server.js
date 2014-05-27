// modules
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');	
var fs = require('fs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var config = {
	db: 'mongodb://root:hh7357@ds031477.mongolab.com:31477/book',
	rootPath: __dirname
}

require('./server/config/express')(app, config);
require('./server/config/mongodb')(config);

var User = mongoose.model('User');
passport.use(new LocalStrategy(
	function(username, password, done) {
		User.findOne({username: username}).exec(function(err, user) {
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	}
));

passport.serializeUser(function(user, done) {
	if (user) { done(null, user.id); }
});
passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
    done(err, user);
  });
});

require('./server/config/route')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

