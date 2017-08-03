var yearsAgo = function(year) {
    var today = new Date();
    return today.getFullYear() - year;
}
console.log(yearsAgo(1995));
module.export = yearsAgo;
