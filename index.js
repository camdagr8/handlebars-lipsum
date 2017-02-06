/**
 * Handlebars lipsum helper
 * @param from {Number} The start index.
 * @param to {Number} The end index.
 */
var latin = require('./latin.json');

module.exports = function(from, to) {
	var output = latin.text;
		output = output.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
		output = output.replace(/\s{2,}/g," ");
		output = output.substr(from, to);
		output = output.trim();

	var first = output.substr(0, 1);
		first = first.toUpperCase();

	var rest = output.substring(1);

	output = first + rest;

	return output;
};