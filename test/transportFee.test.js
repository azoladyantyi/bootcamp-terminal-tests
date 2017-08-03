const transportFee = require('../transportFee.js');
const assert = require('assert');
describe('transportFee', function(){
    it("should return 'R20' when given 'case 'Morning''", function(){
    assert.equal(transportFee('Morning'),'R20')
    });
    it("should return 'R10' when given 'case 'afternoon''", function(){
      assert.equal(transportFee('afternoon'),'R10')


    });
    it("should return 'You pay nothing' default'", function(){
assert.equal(transportFee('night shift'),'You pay nothing')

  });

});
