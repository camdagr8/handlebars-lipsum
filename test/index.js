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
