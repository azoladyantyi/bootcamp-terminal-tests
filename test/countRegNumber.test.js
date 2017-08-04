const countRegNumber = require('../countRegNumber.js');
const assert = require('assert');
describe('countRegNumber', function(){
    it("should return '3' when given 'regNumber.split(', ')'", function(){
      assert.equal(countRegNumber('CA182736, CY523519, CJ812328'), 3)
    });
});
