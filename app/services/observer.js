var Tail = require('tail').Tail;
var Log = require('../models/log');

var Observer = function() {

	tail = new Tail('./tests/test_logs/test.log');

	tail.on("line", function(data) {
		var log = new Log(data);
		log.save();
	});
};

module.exports = Observer;