var isFromBellville = function(regNumber){
  var results = regNumber.startsWith('CY');
  console.log(results);
  return results;
};
module.exports = isFromBellville;
