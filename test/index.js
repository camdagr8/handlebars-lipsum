var should = require('chai').should(),
    lipsum = require('../index.js');

describe('#lipsum(0, 25)', function() {
  it('Chars 0-25', function() {
	lipsum(0, 25).should.equal('Cras pretium scelerisque');
  });
});


describe('#lipsum(25, 50)', function() {
  it('Chars 25-50', function() {
	lipsum(25, 50).should.equal('Odio eget dignissim velit auctor at Nullam efficit');
  });
});


describe('#lipsum(random, 50)', function () {
  var cont = lipsum('random', 50);
  it('Chars random-50: '+cont, function() {
	return cont;
  });
});
