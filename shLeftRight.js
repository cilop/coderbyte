var shLeft = function (str,num)
{
    
    return str.substr(num,str.length-1) + str.substr(0,num);
}

var shRight = function (str,num)
{

    
    return str.substr(str.length-num,str.length-1) + str.substr(0,str.length-num);
}
