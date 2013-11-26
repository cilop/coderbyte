function NumberAddition(str) { 

  var arr = str.match(/\d+/g);
  var ans = 0;
  
  if (arr != null){
  for (var i = 0;i<arr.length;i++)
  {
    ans = ans + parseInt(arr[i]);
  }
  
  return ans; 
         }
  else
  {
  return 0;
  }
}
