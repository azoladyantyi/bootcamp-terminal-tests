const countRegNumber = require('../countRegNumber.js');
const assert = require('assert');
describe('countRegNumber', function(){
    it("should return '3' when given 'regNumber.split(', ')'", function(){
      assert.equal(countRegNumber('CA 182736, CY 523519, CJ 812328'), 3)
    });
});
