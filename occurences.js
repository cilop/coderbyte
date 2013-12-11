//returns array of indexes of found 'char's in 'str'

var occurences = function(str,char){
    indexes = [];
    pos = str.indexOf(char);
    
    while (pos !== -1){
        indexes.push(pos);
        pos = str.indexOf(char,pos+1);
    }
    return indexes;
};
