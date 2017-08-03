const fromWhere = require('../fromWhere');
const assert = require('assert');
describe('fromWhere', function(){
    it("should return 'Bellville' when given 'regNumber.startsWith('CY')'", function(){
      assert.equal(fromWhere('CY123'), 'Bellville')

    });

    it("should return 'Paarl' when given 'regNumber.startsWith('CJ')'", function(){
      assert.equal(fromWhere('CJ4500'), 'Paarl')


    });

    it("should return 'Cape Town' when given 'regNumber.startsWith('CA')'", function(){
      assert.equal(fromWhere('CA1256'), 'Cape Town');
    });
});
