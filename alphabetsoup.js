function AlphabetSoup(str) { 

  str = str.replace(/[ ]/gi,'');
  
  return str.split('').sort().join(''); 
         
}
