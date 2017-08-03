const regCheck = require("../regCheck.js");
const assert = require('assert');
describe('regCheck', function(){
    it("should return 'true' when given 'registrationNumber.endsWith(location)'", function(){
      assert.equal(regCheck('DV 23 NB GP', 'GP'),true)
    });
    it("should return 'false' when given 'registrationNumber.!endsWith(location)'", function(){
      assert.equal(regCheck('DV 23 LP GP', 'MP'),false)

    });
});
