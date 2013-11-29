//Swap cases of chars in str

function SwapCase(str) { 

  var arr = str.split('');
  
  for (var i = 0;i<arr.length;i++)
  {
    if (arr[i].match(/[a-z]/))
        {
            arr[i] = arr[i].toUpperCase();
        }
    else if (arr[i].match(/[A-Z]/))
    {
      arr[i] = arr[i].toLowerCase();
    }
  }
  
  return arr.join(''); 
         
}
