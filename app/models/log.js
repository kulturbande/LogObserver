var _ = require('lodash'),
	validator = require('validator');

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
		if (this.isValid()) {
			collection[this.id] = this;
			return true;
		}
		return false;
	};

	Log.prototype.isValid = function() {
		return validator.isAlphanumeric(this.name) && validator.matches(this.path, /(\/\w+)+\.(\w{1,3})/i);
	};

	return Log;
})();

module.exports = Log;
