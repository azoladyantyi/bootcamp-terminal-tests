const isFromBellville = require("../isFromBellville.js");
const assert = require('assert');
describe('isFromBellville', function(){
    it("should return 'true' when given 'regNumber.startsWith('CY')' ", function(){
    assert.equal(isFromBellville('CY 123'), true);
    });
    it("should return 'false' when given 'regNumber.!startsWith('CY')' ", function(){
    assert.equal(isFromBellville('CA 992'), false);
    });
});
