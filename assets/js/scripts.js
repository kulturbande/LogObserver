//= require jquery
//= require bootstrap

var socket = io();
socket.on('log', function(message) {
	console.log(message);
});