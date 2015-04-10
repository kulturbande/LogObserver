var Tail = require('tail').Tail,
	Log = require('../models/log');

var Observer = function(io) {

	var tail = new Tail('./tests/test_logs/test.log'),
			log = new Log('test', './tests/test_logs/test.log');
			log.save();

	tail.on("line", function(data) {
		var entry = log.addEntry(data);
		io.emit('entry', entry);
	});

	io.on('connection', function(socket){
		console.log('a user connected');
		socket.on('disconnect', function(){
			console.log('user disconnected');
		});
	});
};

module.exports = Observer;
