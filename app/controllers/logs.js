var Log = require('../models/log');
var _ = require('lodash');

var logsController = function(app) {

	function routes() {
		app.namespace('/logs', function() {
			app.get('/', indexAction);
			app.post('/', createAction);
			app.get('/add', createViewAction);
			app.get('/:id', detailAction);
		});
	}

	function createViewAction(req, res) {
		res.render('logs/add');
	}

	function createAction(req, res) {
		var data = req.body.log;
		var log = new Log(data);
		if (!log.isValid()) {

		}
		res.redirect('logs/add');
	}

	function indexAction(req, res) {
		res.render('logs/index', {
			logs: Log.all()
		});
	}

	function detailAction(req, res) {
		var id = req.params.id;
		res.render('logs/detail', {
			entries: Log.find(id).getEntries()
		});
	}

	routes();
};

module.exports = logsController;
