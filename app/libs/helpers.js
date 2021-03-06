var _ = require('lodash');

exports.list = function(items, options) {
  var out = "<ul>";
  for(var i=0, l=items.length; i<l; i++) {
    if (!_.isEmpty(items[i])) {
      out = out + "<li>" + options.fn(items[i]) + "</li>";
    }
  }

  return out + "</ul>";
}
