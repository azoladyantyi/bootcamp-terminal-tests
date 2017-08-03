const isWeekday= require("../isWeekday.js");
const assert = require('assert');
describe('isWeekday', function(){
    it("should return 'true' when given '!day.startsWith('S')' ", function(){
    assert.equal(isWeekday('Tuesday'), true);
    });

    it("should return 'false' when given 'day.startsWith('S')' ", function(){
      assert.equal(isWeekday('Sunday'),false);

    });
});
