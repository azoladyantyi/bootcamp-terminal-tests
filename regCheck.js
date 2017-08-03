var regCheck = function(registrationNumber, location){
  var results = registrationNumber.endsWith(location);
  return results;
};
module.exports = regCheck;
