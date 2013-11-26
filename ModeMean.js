/*Have the function MeanMode(arr) take the array of numbers stored in arr
*and return 1 if the mode equals the mean, 0 if they don't equal each other
*(ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
*The array will not be empty, will only contain positive integers, and will 
*not contain more than one mode. 
*/


function MeanMode(arr) { 

  var current = 0;
  var max = 0;
  var mode;
  var mean = 0;
  

  
  for (var i = 0;i<arr.length;i++)
  {

    mean = mean + arr[i];
    if (arr[i] == arr[i+1])
    {
        current++;
        if (current > max)
        {
            max = current;
            current = 0;
            mode = arr[i];
        }
    }
  }
  
  mean = mean / arr.length ;
  
  if (mode == mean)
  {return 1}
  else
  {return 0}
  //return arr; 
         
}
