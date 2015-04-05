
var frontendController = function(app) {

	function routes() {
		app.get('/', getAction);
	}

	function getAction(req, res) {
		res.render('index');
	}

	routes();
};

module.exports = frontendController;