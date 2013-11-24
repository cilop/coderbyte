function FirstReverse(str) { 
//todo: optimize this, there are better ways
  var ans = '';
  for (var i = str.length;i>=0;i--)
  {
    ans = ans + str.charAt(i);

  }
  return ans; 
         
}
