var isWeekday = function(day){
  var results = !day.startsWith('S');

  return results;
};
module.exports = isWeekday;
