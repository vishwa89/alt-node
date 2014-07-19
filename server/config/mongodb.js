var mongoose = require('mongoose');

module.exports = function(config) {

	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'conncetion error.'));
	db.once('open', function callback() {
		console.log('database opened.');
	});

	var productSchema = mongoose.Schema({
		name: {
			type:String, 
			required:'{PATH} is required!'
		},
		image: {
			type:String, 
			required:'{PATH} is required!'
		},
		designer: {
			type:String, 
			required:'{PATH} is required!'
		},
		price: {
			type:Number, 
			required:'{PATH} is required!'
		},
		type: {
			type:String, 
			required:'{PATH} is required!'
		},
    colour: {
      type:String, 
      required:'{PATH} is required!'
    },
    gender: {
      type:String, 
      required:'{PATH} is required!'
    },
		likeCount: {
			type:Number
		},
	});
	mongoose.model('Product', productSchema);

}