//const assert = require('assert');
function countAllPaarl(reg) {
    var Paarlreg = reg.split(', ');
    var regNumbers = [];

    for (var i = 0; i < Paarlreg.length; i++) {

        if (Paarlreg[i].startsWith('CJ')) {
            regNumbers.push(Paarlreg[i]);
        }

    }
    return regNumbers;
}
module.exports = countAllPaarl;
