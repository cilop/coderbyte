function LetterCapitalize(str) { 

  var arr = str.split(' ');
  var aux;
  
  for (var i = 0; i<arr.length; i++)
  {
    aux = arr[i].charAt(0);
    aux = aux.toUpperCase();
    
    arr[i] = arr[i].substr(1,arr[i].length);
    arr[i] = aux + arr[i];
  }
  
  
  return arr.join(' '); 
         
}
