//convert binary string eg '1101110' to number

function BinaryConverter(str) { 

  var ans = 0;
  var aux = 0;
  for (var i = str.length - 1;i>=0;i--)
  {
    ans = ans + parseInt(str[i])*Math.pow(2,aux);
    aux++;
  }
  
  
  return ans; 
         
}
