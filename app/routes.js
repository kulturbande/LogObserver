
var routes = function(app, io) {
	var frontend = require('./controllers/frontend')(app);
	var logs = require('./controllers/logs')(app, io);
};

module.exports = routes;