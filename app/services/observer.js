var Tail = require('tail').Tail,
	Log = require('../models/log');

var Observer = function(io) {

	tail = new Tail('./tests/test_logs/test.log');

	tail.on("line", function(data) {
		var log = new Log(data);
		log.save();
		io.emit('log', log);
	});

	io.on('connection', function(socket){
		console.log('a user connected');
		socket.on('disconnect', function(){
			console.log('user disconnected');
		});
	});
};

module.exports = Observer;