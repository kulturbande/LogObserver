
var assert = require('assert');
var libxmljs = require('libxmljs');

assert.hasTag = function (html, xpath, expected, message) {
	var document = libxmljs.parseHtmlString(html),
		element = document.find(xpath);

	if (typeof element[0] === 'undefined') {
		throw new Error(xpath + " was not found in:\n"+document);
	} else if (expected != element[0].text()) {
		message = message || "expected '"+element[0].text()+"' to be "+expected;
		assert.fail(element[0].text(), expected, message, "hasTag", assert.hasTag);
	}
};