//Count all the vowerls

function VowelCount(str) { 

  var re = /[a|e|i|o|u]/g;
  var m;
  var i=-1;

  do {
  m = re.exec(str)
  i ++;
  } while (m);
  
  return i; 
         
}
