// const assert = require ('assert');
var countRegNumber = function(regNumber) {
  var reg = regNumber.split(', ');

  var regNumber = [];
  for(var i=0;i<reg.length; i++){
  }
  return regNumber.length;
};
// assert.equal(countRegNumber('CA 182736', 'CY 523519', 'CJ 812328'), 3)
module.exports = countRegNumber;
