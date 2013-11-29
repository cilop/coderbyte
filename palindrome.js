//Have the function Palindrome(str) take the str parameter being passed and
//return the string true if the parameter is a palindrome, (the string is the
//same forward as it is backward) otherwise return the string false. For example:
//"racecar" is also "racecar" backwards. Punctuation and numbers will not be part
//of the string

function Palindrome(str) { 

  str = str.split(' ').join('');
  
  for (var i = 0;i<str.length/2;i++)
  {
    if (str[i] != str[str.length  -1- i])
    {
      return false
        }
  }
  
  return true
 
  
         
} 
