/*Have the function MeanMode(arr) take the array of numbers stored in arr
*and return 1 if the mode equals the mean, 0 if they don't equal each other
*(ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
*The array will not be empty, will only contain positive integers, and will 
*not contain more than one mode. 
*/


function MeanMode(arr) { 

  var str = arr.sort(function (a,b) {return b - a}).join('.');
  var mode;
  try{
    mode = parseInt(str.match(/([0-9][.])\1+/ig)[0].match(/[0-9]/)[0]);}
  catch (err){
    return 0}
  var mean;
  var sum = 0;
  
  for (var i = 0;i<arr.length;i++)
  {
    sum = sum + arr[i];
  }
  
  mean = sum / arr.length;
  
  if (mean == mode)
    return 1
   else
     return 0
 
         
}
