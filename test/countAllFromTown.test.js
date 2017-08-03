const allFromTown = require("../countAllFromTown.js");
const assert = require('assert');
describe('allFromTown', function(){
    it("should return '3' when given 'reg[i].startsWith()'", function(){
      assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
    });

});
