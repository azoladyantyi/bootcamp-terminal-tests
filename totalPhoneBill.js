var totalPhoneBill = function(data){
  var dataList = data.split(",");
  var total = 0;

  for(var i=0;i<dataList.length; i++){
    switch (dataList[i]) {
      case 'call':
        total = total + 2.75;
        break;

      case 'sms':
        total = total + 0.65;
    }
  }
  
  return total;

};
totalPhoneBill('call,sms,call,sms,sms');
module.exports = totalPhoneBill;
