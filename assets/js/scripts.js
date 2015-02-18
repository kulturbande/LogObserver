//= require jquery
//= require bootstrap
//= require angular
//= require angular-route
//= require_tree client


// fire up socket.io
var socket = io();
socket.on('log', function(message) {
	console.log(message);
});