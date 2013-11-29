//Count all the vowerls

function VowelCount(str) { 

  
  return str.match(/[aeiou]+/ig).join('').split('').length; 
         
}
