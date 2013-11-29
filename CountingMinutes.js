/*Using the JavaScript language, have the function CountingMinutesI(str) take the str 
parameter being passed which will be two times (each properly formatted with a colon 
and am or pm) separated by a hyphen and return the total number of minutes between 
the two times. The time will be in a 12 hour clock format. For example: if str is 
9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output 
should be 1320. */

var CountingMinutesI  = function (str)

{
    var times = str.split('-');
    var min1;
    var hr1;
    
    var min2;
    var hr2;
    
    var ans;
    
    hr1 = parseInt(times[0].split(":")[0]);
    min1 = parseInt(times[0].split(":")[1].split(/[a-z]/)[0]);
        
    hr2 = parseInt(times[1].split(":")[0]);
    min2 = parseInt(times[1].split(":")[1].split(/[a-z]/)[0]);
    
    if (times[0].search(/[a]/) == times[1].search(/[a]/) || times[0].search(/[p]/) == times[1].search(/[p]/))
    {
        
        ans = Math.abs(hr1 - hr2)*60 + (min2 - min1);
                
    }
    else
    {
        
        ans = (12 - (hr1 - hr2)%12)*60 + (min2 - min1);
    }
    return ans;
}

// TRY 2:

function CountingMinutesI_try2(str) { 

  
  var times = str.split('-');
  var auxarr,h1,m1,h2,m2,ans;
  
  auxarr = times[0].match(/[^a-z]+/ig)[0].split(':');
  h1 = parseInt(auxarr[0]);
  m1 = parseInt(auxarr[1]);
  
  auxarr = times[1].match(/[^a-z]+/ig)[0].split(':');
  h2 = parseInt(auxarr[0]);
  m2 = parseInt(auxarr[1]);
  
  if (times[0][times[0].length-2] == times[1][times[1].length-2])
  {
    //ans = ((h2-h1)*60 + (m2-m1))%1440;
    if (h2 > h1)
     ans =  ((h2-h1)*60 + (m2-m1))%1440;
    
    else
      ans = 1440 +  ((h2-h1)*60 + (m2-m1))%1440;
  }
  else
  {
    ans =  ((12 + (h2-h1)%12)*60 + (m2-m1));
  }
  
  
    return ans;
         
}
