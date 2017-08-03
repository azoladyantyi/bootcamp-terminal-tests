const greet = require("../greet.js");
const assert = require('assert');
describe('greet', function(){
    it("should return 'Bongisiwe' when given 'Hi, Bongisiwe", function(){
      assert.equal(greet('Bongisiwe'), 'Hi, Bongisiwe')
    });
    it("should return 'Themby' when given 'Hi, Themby'", function(){
      assert.equal(greet('Themby'), 'Hi, Themby')
    });
});
