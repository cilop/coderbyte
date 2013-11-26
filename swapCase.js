//Swap cases of chars in str

function SwapCase(str) { 

  var arr = str.split('');
  var ans = '';
  //var aux;
  
  for (var i = 0;i<arr.length;i++)
  {
    if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122)
    {
      ans = ans + arr[i].toUpperCase();
    }
    else if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90)
    {
      ans = ans + arr[i].toLowerCase();
    }
    else
    {
      ans = ans + arr[i];
    }
  }
  
  return ans; 
         
}
