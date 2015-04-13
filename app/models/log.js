var Log = (function() {
		var collection = [];
		var lastId = 1;

		Log.all = function() {
				return collection;
		};

		Log.find = function(id) {
				return typeof collection[id] == 'undefined' ? [] : collection[id];
		};

		function Log(name, path) {
				this.id = lastId++;
				this.path = path;
				this.name = name;
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

		return Log;
})();

module.exports = Log;
