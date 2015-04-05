var Log = require('../models/log');
var logsController = function(app) {

	function routes() {
		app.namespace('/logs', function() {
			app.get('/', getAction);
		});
	}

	function getAction(req, res) {
		if (req.is('json')) {
			res.json(Log.all());
		} else {
			res.render('logs.html');
		}

	}

	routes();
};

module.exports = logsController;