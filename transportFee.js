var transportFee = function(shift){
  switch(shift){
    case 'Morning':

      return  'R20';
    case 'afternoon':

      return  'R10';
    default:

      return  'You pay nothing'
  }
}
module.exports = transportFee;
