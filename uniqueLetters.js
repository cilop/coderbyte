//Receive 2 strings and return unique instances of each letter in both strings
// eg 'abcd',abcdef' returns abcdef

var uniqueLetters = function(str1,str2){
    var catStr = str1 + str2;
    var occ = {};
    
    for (var i = 0; i < catStr.length; i++){
        
        occ[catStr.charAt(i)] = true;
    }
    
    catStr = '';
    
    for (i in occ){
        
        catStr = catStr + i;
    }
    
    return caStr;
};
