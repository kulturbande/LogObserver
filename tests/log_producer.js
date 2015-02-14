
var fs = require('fs'),
	_ = require('lodash');


/**
 * write log entry
 * @param file
 * @param message
 */
function createLogEntry(file, message) {
	var date = new Date();
	message = '\n['+ date.toDateString() +']' + message;
	fs.appendFile('test_logs/'+file+'.log', message, function (err) {
	  	if (err) throw err;
	});
}

/**
 * create a random log entry into test file
 * @param fileName
 */
function randomLogEntries(fileName) {
	var messages = [
		'[error] [client 127.0.0.1]client denied by server configuration: /export/home/live/ap/htdocs/test',
		'[error] [client 127.0.0.1]Directory index forbidden by rule: /, referer: http://www.foo.bar/',
		'[error] [client 127.0.0.1]attempt to invoke directory as script: /srv/foo/cgi-bin/',
		'app.INFO: Hello Logger! [] []'
	];

	createLogEntry(fileName, _.sample(messages));
}


setInterval(function() {
	randomLogEntries('test');
}, 1000);

