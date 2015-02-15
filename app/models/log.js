var Log = (function() {
	var collection = [];

	Log.all = function() {
		return collection;
	};

	function Log(message) {
		this.date = new Date();
		this.message = message || '';

		return this;
	}

	Log.prototype.save = function() {
		collection.push(this);
	};

	return Log;
})();

module.exports = Log;