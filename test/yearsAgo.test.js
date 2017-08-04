const yearsAgo = require('../yearsAgo');
const assert = require('assert');
describe('yearsAgo', function() {
    it("should return '22' when given 'today.getFullYear()'", function() {
        assert.equal(yearsAgo(1995), '22');
    });
    it("should return '30' when given 'today.getFullYear()'", function() {
        assert.equal(yearsAgo(1987), '30');
    });
});
