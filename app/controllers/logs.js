var Log = require('../models/log');
var logsController = function(app) {

	function routes() {
		app.namespace('/logs', function() {
			app.get('/', getAction);
		});
	}

	function getAction(req, res) {
		res.json(Log.all());
	}

	routes();
};

module.exports = logsController;