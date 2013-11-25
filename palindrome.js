function Palindrome(str) { 
  
  var str2 = str.replace(/[ ]/gi,'').split('').reverse().join('');
  str =str.replace(/[ ]/gi,'');
  if (str == str2) {return true}
  else {return false}     
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());   
