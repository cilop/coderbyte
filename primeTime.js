// Check if input is prime number

function PrimeTime(num) { 
  
  var trying = true;
  var i = 2;
  
  if (num != 2){
  do{
    if (num % i == 0)
    {
      trying = false;
    }
    i++;
    
  } while (trying && i< num) 
      return trying; 
    
    }
  else
  {
    return true;
  }
         
}
