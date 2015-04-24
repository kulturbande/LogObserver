var Log = require('../models/log');
var logsController = function(app) {

	function routes() {
			app.namespace('/logs', function() {
					app.get('/', getLogs);
					app.get('/add', addLog);
					app.get('/:id', getLog);
			});
	}

	function addLog(req, res) {
		res.render('logs/add');
	}

	function getLogs(req, res) {
			res.render('logs/index', {
					logs: Log.all()
			});
	}

	function getLog(req, res) {
			var id = req.params.id;
			res.render('logs/detail', {
					entries: Log.find(id).getEntries()
			});
	}

	routes();
};

module.exports = logsController;
