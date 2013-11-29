//Have the function LetterCountI(str) take the str parameter being 
//passed and return the first word with the greatest number of repeated 
//letters. For example: "Today, is the greatest day ever!" should return 
//greatest because it has 2 e's (and 2 t's) and it comes before ever which 
//also has 2 e's. If there are no words with repeating letters return -1. 
//Words will be separated by spaces.

function LetterCountI(str) 

{
    //to use in sort() array by length
    function sortL(a,b){return b.length - a.length}

var arr = str.split(' ');

//order words alphabetically
for (var j = 0;j<arr.length;j++)
{
    arr[j] = arr[j].split('').sort().join('');
}


var max = 0;
var ans = -1;
var auxarr;

//match longest pattern of repeated characters in every word, save index
//of winning word in 'ans'
for (var i = 0;i<arr.length;i++)
{
    auxarr = arr[i].match(/([a-z])\1+/ig);
    
    if (auxarr){
    if (auxarr.sort(sortL)[0].length > max)
    {
        max = arr[i].match(/([a-z])\1+/ig).sort(sortL)[0].length;
        ans = i;
    }
    }
}
    //re create original array of words and return winning word, or return -1
    if (ans != -1)
    return str.split(' ')[ans];
    else
    return ans
}
