//Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return
//the string true if any combination of numbers in the array can be added up to equal the largest 
//number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3]
//the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all 
//the same elements, and may contain negative numbers. 

function ArrayAdditionI(arr) { 

  arr = arr.sort(function(a,b){return a-b});
  var max = arr[arr.length-1];
  arr.pop();
  var suma = 0;
  
  for (var i = 0;i<arr.length;i++)
  {
    console.log(suma);
    suma = suma + arr[i];
    if (suma >= max) {return true}
  }
  
  console.log(suma)
  return false; 
         
}
