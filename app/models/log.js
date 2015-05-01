var _ = require('lodash');
var Log = (function() {
	var collection = [];
	var lastId = 1;

	Log.all = function() {
		return collection;
	};

	Log.find = function(id) {
		return typeof collection[id] == 'undefined' ? [] : collection[id];
	};

	function Log(data) {
		this.id = lastId++;
		this.path = data.path;
		this.name = data.name;
		this.entries = [];
		return this;
	}



	Log.prototype.addEntry = function(message) {
		var entry = {}
		entry.date = new Date();
		entry.message = message || '';
		this.entries.push(entry);
		return entry;
	};

	Log.prototype.getEntries = function() {
		return this.entries;
	};

	Log.prototype.save = function() {
		collection[this.id] = this;
	};

	Log.prototype.isValid = function() {
		return !_.isEmpty(this.name) && !_.isEmpty(this.path);
	};

	return Log;
})();

module.exports = Log;
