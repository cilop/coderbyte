//Have the function DashInsertII(num) insert dashes ('-') between each two odd numbers
//and insert asterisks ('*') between each two even numbers in num. For example: if num 
//is 4546793 the output should be 454*67-9-3. Don't count zero as a negative or positive number. 

function DashInsertII(num) { 

  num = num + '0';
  var arr = [];
  
  for (var i = 0;i<num.length;i++)
  {
    if (num[i].match(/[13579]/) && num[i+1].match(/[13579]/))
    {
      arr.push(num[i]);
      arr.push('-');
    }
    else if (num[i].match(/[2468]/) && num[i+1].match(/[2468]/))
             {
               arr.push(num[i]);
               arr.push('*');
             }
    else 
    {
      arr.push(num[i]);
    }
  }
  
  arr.pop();
  return arr.join(''); 
         
}
