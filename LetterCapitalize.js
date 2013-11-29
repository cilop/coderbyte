function LetterCapitalize(str) { 

  // code goes here  
  var ans = str.split(' ');

  for (var i = 0;i<ans.length;i++)
  {
    ans[i] = ans[i][0].toUpperCase() + ans[i].substr(1,ans[i].length-1);
  }
  
  return ans.join(' '); 
         
}
