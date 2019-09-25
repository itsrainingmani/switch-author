const assert = require('assert');

describe('Array', () => {
	it('should print Test', () => {
		console.log('Test');
		assert.equal([1, 2, 3].indexOf(4), -1);
	});
});
