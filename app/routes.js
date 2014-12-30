
var routes = function(app) {
	frontend = require('./controllers/frontend')(app);
	logs = require('./controllers/logs')(app);
};

module.exports = routes;