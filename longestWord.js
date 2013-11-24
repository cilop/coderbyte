function LongestWord(sen) { 

  var words = sen.split(' ');
  var winner = '';
  //var alpha = 'abcdefghijklmopqrstuvwxyz';
  
  for (var i = 0 ; i < words.length; i ++)
  {
    if (words[i].length > winner.length)
    {
      winner = words[i];
    }
  }
  
  return winner; 
         
}
