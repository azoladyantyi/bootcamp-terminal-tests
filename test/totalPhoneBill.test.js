const totalPhoneBill = require('../totalPhoneBill.js');
const assert = require('assert');
describe('totalPhoneBill', function(){
    it("should return '7.45' when given 'total = total + 2.75'", function(){
      assert.equal(totalPhoneBill('call,sms,call,sms,sms').toFixed(2), 7.45);
    });

});
