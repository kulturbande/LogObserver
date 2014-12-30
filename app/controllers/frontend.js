
var frontendController = function(app) {

	function routes() {
		app.get('/', getAction);
	}

	function getAction(req, res) {
		res.render('index.html');
	}

	routes();
};

module.exports = frontendController;