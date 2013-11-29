//Insert dashes between any TWO odd numbers !!

function DashInsert(num) { 

  
  var arr = [];
  num = num + '';
  
  for (var i = 0;i<num.length;i++)
  {
    if (parseInt(num[i]) % 2 == 1 && parseInt(num[i+1])%2 == 1)
    {
      arr.push(num[i]);
      arr.push('-');
    }
    else
    {
      arr.push(num[i]);
    }
  }
  
 // if (arr[0] == '-')
  //  arr.shift();
  
  return arr.join(''); 
         
}
