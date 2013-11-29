function LongestWord(sen) { 

  var arr = sen.match(/\w+/ig);
  var winner = 0;
  var winnerWord;
  
  for (var i = 0; i < arr.length;i++)
  {
    if (arr[i].length > winner)
    {
      winnerWord = arr[i];
      winner = arr[i].length;
    }
  }
  
  return winnerWord; 
         
}
