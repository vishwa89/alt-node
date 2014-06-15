var Video = require('../data/video');

exports.getVideos = function(req, res) {
	Video.find({}).exec(function(err, videos) {
		res.send(videos);
	});
};