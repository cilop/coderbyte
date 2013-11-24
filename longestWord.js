function LongestWord(sen) { 
//todo: implement ignore punctiation!
  var words = sen.split(' ');
  var winner = '';

  
  for (var i = 0 ; i < words.length; i ++)
  {
    if (words[i].length > winner.length)
    {
      winner = words[i];
    }
  }
  
  return winner; 
         
}
