//Insert dashes between any TWO odd numbers !!

function DashInsert(num) { 

  var arr = (num+"").split('');
  var ans = [];
  
  for (var i = 0;i<arr.length;i++)
  {
    if (arr[i]%2 !== 0 && arr[i+1]%2 !== 0)
    {
      ans.push(arr[i]);
      ans.push('-');
    }
    else
    {
      ans.push(arr[i]);
    }
  }
  
  if (ans[ans.length-1] == '-')
  ans.pop();
  
  return ans.join(''); 
         
}
