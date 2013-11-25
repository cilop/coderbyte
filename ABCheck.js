/*Have the function ABCheck(str) take the str 
*parameter being passed and return the string true if the characters a and b are separated by exactly 3
*places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly
*three characters between a and b). Otherwise return the string false. 
*/

function ABCheck(str) { 

  re = /[a][a-z ][a-z ][a-z ][b]/g
  re2 = /[b][a-z ][a-z ][a-z ][a]/g
    
  if (str.search(re) != -1 || str.search(re2) != -1)
    return true
  else
    return false
  
  
  return str; 
         
}
