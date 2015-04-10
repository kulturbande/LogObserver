var Log = (function() {
		var collection = [];

		Log.all = function() {
				return collection;
		};

		function Log(id, path) {
				this.id = id;
				this.path = path;
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

		Log.prototype.find = function(id) {
				return typeof collection[id] == 'undefined' ? null : collection[id];
		};

		return Log;
})();

module.exports = Log;
