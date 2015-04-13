var Log = require('../models/log');
var logsController = function(app) {

	function routes() {
			app.namespace('/logs', function() {
					app.get('/', getLogs);
					app.get('/:id', getLog);
			});
	}

	function getLogs(req, res) {
			res.render('logs', {
					logs: Log.all()
			});
	}

	function getLog(req, res) {
			var id = req.params.id;
			res.render('log_entries', {
					entries: Log.find(id).getEntries()
			});
	}

	routes();
};

module.exports = logsController;
