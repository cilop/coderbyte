function FirstFactorial(num) { 

  var ans = 1;
  
  for (var i = 2; i <= num; i++)
  {
    ans *= i;
  }
  return ans; 
         
}
