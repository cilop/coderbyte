//Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return
//the second lowest and second greatest numbers, respectively, separated by a space. For 
//example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will
//not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

function SecondGreatLow(arr) { 

  var auxarr = [];
  if (arr.length == 1)
  {
    return arr[0] + ' ' + arr[0];
  }
  
  else
  {
    for (i=0;i<arr.length;i++)
    {
      if (arr[i] != arr[i+1])
        auxarr.push(arr[i]);
    }
    
    auxarr.sort(function (a,b) {return b-a});
    auxarr.shift();
    auxarr.pop();
    
    return auxarr[auxarr.length - 1] + ' ' + auxarr[0];
  }
  
  
}
