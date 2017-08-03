var fromWhere = function(regNumber){
  if (regNumber.startsWith('CY')){

    console.log('Bellville')
      return 'Bellville';

  }if (regNumber.startsWith('CJ')){
     console.log('Paarl');
      return 'Paarl';

  } if (regNumber.startsWith('CA')){
  console.log('Cape Town');
    return 'Cape Town';
  }
  else {
    return 'Some other place'
  }
};
module.exports = fromWhere; 
