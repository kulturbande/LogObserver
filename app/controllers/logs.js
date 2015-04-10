var Log = require('../models/log');
var logsController = function(app) {

	function routes() {
			app.namespace('/logs', function() {
					app.get('/', getLogs);
					app.get('/:id', getLog(id));
			});
	}

	function getLogs(req, res) {
			res.render('logs', {
					logs: Log.all()
			});
	}

	function getLog(req, res) {
			var id = req.params[0];
			res.render('logs', {
					logs: Log.find(id).getEnties();
			});
	}

	routes();
};

module.exports = logsController;
