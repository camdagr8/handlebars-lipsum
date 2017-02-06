/**
 * Handlebars lipsum helper
 * @param from {Number} The start index.
 * @param to {Number} The end index.
 */
var latin = require('./lipsum.json');

module.exports = function(from, to) {

	var output = latin.text;
	output = output.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	output = output.replace(/\s{2,}/g," ");

	if (from === 'random') {
		let len = output.length - to;
		from = Math.floor(Math.random() * len);
	}

	output = output.substr(from, to);
	output = output.trim();
	output = output.toLowerCase();

	// Make sure first word isn't a random letter.
	let words = output.split(' ');

	let firstWord = words[0];
	while (firstWord.length < 2) {

		let l = firstWord.substr(0, 1);
		if (l !== 'i' && l !== 'a') {
			output = output.substr(2);
			output = output.trim();

			words = output.split(' ');
			firstWord = words[0];
		} else {
			break;
		}

	}

	// Make sure last word isn't a random letter.
	let lastWord = words[words.length - 1];
	while (lastWord.length < 3) {

		let l = lastWord.substr(0, 1);
		if (l !== 'i') {
			let len = output.length - lastWord.length;
			output = output.substr(0, len);
			output = output.trim();

			words = output.split(' ');
			lastWord = words[words.length - 1];
		} else {
			break;
		}
	}

	// Uppercase first letter
	let first = output.substr(0, 1);
	first = first.toUpperCase();

	let rest = output.substring(1);

	output = first + rest;

	return output;
};
