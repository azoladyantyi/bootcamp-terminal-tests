const yearsAgo = require('../yearsAgo.js');
const assert = require('assert');
describe('yearsAgo', function() {
    it("should return '22' when given 'today.getFullYear()'", function() {
        assert.equal(yearsAgo(1995), '22');
    });
});
