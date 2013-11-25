//Have the function LetterCountI(str) take the str parameter being 
//passed and return the first word with the greatest number of repeated 
//letters. For example: "Today, is the greatest day ever!" should return 
//greatest because it has 2 e's (and 2 t's) and it comes before ever which 
//also has 2 e's. If there are no words with repeating letters return -1. 
//Words will be separated by spaces.


function LetterCountI(str) { 

  var words = str.split(' ');
  //console.log(words);
  var winner = -1;
  var word;
  var counting = 0;
  var max = 0;
  
  for (var i = 0;i<words.length;i++)
  {
    word = words[i];
    word = word.split('').sort().join('');
    word = word + '@';
    //console.log(word)
    for (var j = 0;j<word.length-1;j++)
    {
      //console.log(word.charAt(j))
      if (word.charAt(j).toLowerCase() == word.charAt(j+1).toLowerCase())
      {
         // console.log('im in');
        counting = 1 + counting;
      }
    }
      if (counting > max)
      {
        max = counting + 1;
        counting = 0;
        winner = words[i];
      }
      //console.log(counting)
    }
    
      
      
  
  return winner; 
         
}
