var socket = io();
socket.on('log', function(message) {
	console.log(message);
});