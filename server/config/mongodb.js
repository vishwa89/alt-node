var mongoose = require('mongoose');

module.exports = function(config) {

	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'conncetion error.'));
	db.once('open', function callback() {
		console.log('database opened.');
	});

	var userSchema = mongoose.Schema({
		username: String
	});

	var User = mongoose.model('User', userSchema);

	/*User.find({}).exec(function(err, users) {
		console.log(users.length);
	});*/

}