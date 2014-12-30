
var logsController = function(app) {

	function routes() {
		app.namespace('/logs', function() {
			app.get('/', getAction);
		});
	}

	function getAction(req, res) {
		res.json({});
	}


	routes();
};

module.exports = logsController;