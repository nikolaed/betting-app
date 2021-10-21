function todayDate(){
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 

    today = yyyy+'-'+mm+'-'+dd;
    return today;
}

function tomz1(){
    var today = new Date();
    var tomz1 = new Date(today);

    var dd = tomz1.getDate()+1;
    var mm = tomz1.getMonth();
    
    var yy = tomz1.getFullYear();

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd>31){
            newMM = mm+1;
            changed=true;
            if(dd==32){
                dd=1;
            }
        }else{
            newMM = mm;
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd>30){
            newMM=mm+1;
            changed=true;
            if(dd==31){
                dd=1;
            }
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        if(isLeapYear(yy)){
            if(dd>29){
                newMM=mm+1;
                changed=true;
                if(dd==30){
                    dd=1;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }else{
            if(dd>28){
                newMM=mm+1;
                changed=true;
                if(dd=29){
                    dd=1;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }
    }
    
    var tomzOne;
    if(changed==true){
        tomzOne = new Date(yy,newMM-1,dd);
    }else{
        tomzOne = new Date(yy,newMM,dd);
    }
    
    



    mm = tomzOne.toLocaleString('default', {month: 'short'}).toUpperCase();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    tomz1 = mm+' '+dd;

    return tomz1;
}

function tomz2(){
    var today = new Date();
    var tomz2 = new Date(today);

    var dd = tomz2.getDate()+2;
    var mm = tomz2.getMonth();
    
    var yy = tomz2.getFullYear();

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd>31){
            newMM = mm+1;
            changed=true;
            if(dd==32){
                dd=1;
            }else if(dd==33){
                dd=2;
            }
        }else{
            newMM = mm;
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd>30){
            newMM=mm+1;
            changed=true;
            if(dd==31){
                dd=1;
            }else if(dd==32){
                dd=2;
            }
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        if(isLeapYear(yy)){
            if(dd>29){
                newMM=mm+1;
                changed=true;
                if(dd==30){
                    dd=1;
                }else if(dd==31){
                    dd=2;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }else{
            if(dd>28){
                newMM=mm+1;
                changed=true;
                if(dd=29){
                    dd=1;
                }else if(dd==30){
                    dd=2;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }
    }
    
    var tomzTwo;
    if(changed==true){
        tomzTwo = new Date(yy,newMM-1,dd);
    }else{
        tomzTwo = new Date(yy,newMM,dd);
    }
    
    



    mm = tomzTwo.toLocaleString('default', {month: 'short'}).toUpperCase();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    tomz2 = mm+' '+dd;

    return tomz2;
}

function tomz3(){
    var today = new Date();
    var tomz3 = new Date(today);

    var newMM;
    var changed=false;;

    var dd = tomz3.getDate()+3;
    var mm = tomz3.getMonth();
    var yy = tomz3.getFullYear();
    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd>31){
            newMM = mm+1;
            changed=true;
            if(dd==32){
                dd=1;
            }else if(dd==33){
                dd=2;
            }else if(dd==34){
                dd=3;
            }
        }else{
            newMM = mm;
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd>30){
            newMM=mm+1;
            changed=true;
            if(dd==31){
                dd=1;
            }else if(dd==32){
                dd=2;
            }else if(dd==33){
                dd=3;
            }
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        if(isLeapYear(yy)){
            if(dd>29){
                newMM=mm+1;
                changed=true;
                if(dd==30){
                    dd=1;
                }else if(dd==31){
                    dd=2;
                }else if(dd==32){
                    dd=3;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }else{
            if(dd>28){
                newMM=mm+1;
                changed=true;
                if(dd=29){
                    dd=1;
                }else if(dd==30){
                    dd=2;
                }else if(dd==31){
                    dd=3;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }
    }
    
    var tomzThree;
    if(changed==true){
        tomzThree = new Date(yy,newMM-1,dd);
    }else{
        tomzThree = new Date(yy,newMM,dd);
    }
    
    
    
    mm = tomzThree.toLocaleString('default', {month: 'short'}).toUpperCase();
    var yyyy = tomz3.getFullYear();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    tomz3 = mm+' '+dd;

    return tomz3;
}

function prev1(){
    var today = new Date();
    var prev1 = new Date(today);

    var dd = prev1.getDate()-1;
    var mm = prev1.getMonth()+1;
    // mm = prev1.toLocaleString('default', {month: 'short'}).toUpperCase();
    var yyyy = prev1.getFullYear();
    

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd==0){
            if(mm==3 && isLeapYear(yyyy)){
                dd=29;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yyyy)){
                dd=28;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=30;
                changed=true;
            }
        }else{
            newMM = mm;
            console.log(newMM);
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd==0){
            newMM=mm-1;
            changed=true;
            dd=31;
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        // if(isLeapYear(yyyy)){
        //     if(dd>29){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd==30){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }else{
        //     if(dd>28){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd=29){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }
        if(dd==0){
            newMM==mm-1;
            changed=true;
            dd=31;
        }else{
            newMM = mm;
            changed = false;
        }
    }
    
    var prevOne;
    if(changed==true){
        prevOne = new Date(yyyy,newMM-1,dd);
    }else{
        prevOne = new Date(yyyy,newMM-1,dd);
        console.log(prevOne);
    }

    mm = prevOne.toLocaleString('default', {month: 'short'}).toUpperCase();
    

    

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    prev1 = mm+' '+dd;

    return prev1;
}

function prev2(){
    var today = new Date();
    var prev2 = new Date(today);

    var dd = prev2.getDate()-2;
    var mm = prev2.getMonth()+1;
    //mm = prev2.toLocaleString('default', {month: 'short'}).toUpperCase();
    var yyyy = prev2.getFullYear();


    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd==0){
            if(mm==3 && isLeapYear(yyyy)){
                dd=29;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yyyy)){
                dd=28;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=30;
                changed=true;
            }
        }else if(dd==-1){
            if(mm==3 && isLeapYear(yyyy)){
                dd=28;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yyyy)){
                dd=27;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=29;
                changed=true;
            }
        }else{
            newMM = mm;
            console.log(newMM);
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd==0){
            newMM=mm-1;
            changed=true;
            dd=31;
        }else if(dd==-1){
            newMM=mm-1;
            changed=true;
            dd=30;
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        // if(isLeapYear(yyyy)){
        //     if(dd>29){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd==30){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }else{
        //     if(dd>28){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd=29){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }
        if(dd==0){
            newMM=mm-1;
            changed=true;
            dd=31;
        }else if(dd==-1){
            newMM=mm-1;
            changed=true;
            dd=30;
        }else{
            newMM = mm;
            changed = false;
        }
    }
    
    var prevTwo;
    if(changed==true){
        prevTwo = new Date(yyyy,newMM-1,dd);
        console.log(prevTwo);
        
    }else{
        prevTwo = new Date(yyyy,newMM-1,dd);
    }

    mm = prevTwo.toLocaleString('default', {month: 'short'}).toUpperCase();
    

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    prev2 = mm+' '+dd;

    return prev2;
}

function prev3(){
    var today = new Date();
    var prev3 = new Date(today);

    var dd = prev3.getDate()-3;
    var mm = prev3.getMonth()+1;
    //mm = prev3.toLocaleString('default', {month: 'short'}).toUpperCase();
    var yyyy = prev3.getFullYear();

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd==0){
            if(mm==3 && isLeapYear(yyyy)){
                dd=29;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yyyy)){
                dd=28;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=30;
                changed=true;
            }
        }else if(dd==-1){
            if(mm==3 && isLeapYear(yyyy)){
                dd=28;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yyyy)){
                dd=27;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=29;
                changed=true;
            }
        }else if(dd==-2){
            if(mm==3 && isLeapYear(yyyy)){
                dd=27;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yyyy)){
                dd=26;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=28;
                changed=true;
            }
        }else{
            newMM = mm;
            console.log(newMM);
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd==0){
            newMM=mm-1;
            changed=true;
            dd=31;
        }else if(dd==-1){
            newMM=mm-1;
            changed=true;
            dd=30;
        }else if(dd==-2){
            newMM=mm-1;
            changed=true;
            dd=29;
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        // if(isLeapYear(yyyy)){
        //     if(dd>29){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd==30){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }else{
        //     if(dd>28){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd=29){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }
        if(dd==0){
            newMM=mm-1;
            changed=true;
            dd=31;
        }else if(dd==-1){
            newMM=mm-1;
            changed=true;
            dd=30;
        }else if(dd==-2){
            newMM=mm-1;
            changed=true;
            dd=29;
        }else{
            newMM = mm;
            changed = false;
        }
    }
    
    var prevThree;
    if(changed==true){
        prevThree = new Date(yyyy,newMM-1,dd);
        
        
    }else{
        prevThree = new Date(yyyy,newMM-1,dd);
    }

    mm = prevThree.toLocaleString('default', {month: 'short'}).toUpperCase();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    prev3 = mm+' '+dd;

    return prev3;
}


function isLeapYear(year) {
    if(year % 4 == 0)
    {
       if(year % 100 == 0)
       {
          if(year % 400 == 0)
          {
             return true;
          }
          else
          {
             return false;
          }
       }
       else
       {
          return true;
       }
    }
    else
    {
       return false;
    }
}


function tomz1Date(){
    var today = new Date();
    var tomz1 = new Date(today);

    var dd = tomz1.getDate()+1;
    var mm = tomz1.getMonth()+1;
    
    var yy = tomz1.getFullYear();

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd>31){
            newMM = mm+1;
            changed=true;
            if(dd==32){
                dd=1;
            }
        }else{
            newMM = mm;
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd>30){
            newMM=mm+1;
            changed=true;
            if(dd==31){
                dd=1;
            }
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        if(isLeapYear(yy)){
            if(dd>29){
                newMM=mm+1;
                changed=true;
                if(dd==30){
                    dd=1;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }else{
            if(dd>28){
                newMM=mm+1;
                changed=true;
                if(dd=29){
                    dd=1;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }
    }
    
    var tomzOne;
    if(changed==true){
        tomzOne = new Date(yy,newMM-1,dd);
    }else{
        tomzOne = new Date(yy,newMM,dd);
    }
    
    



    //mm = tomzOne.toLocaleString('default', {month: 'short'}).toUpperCase();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    tomz1 = yy+'-'+mm+'-'+dd;

    return tomz1;
}

function tomz2Date(){
    var today = new Date();
    var tomz2 = new Date(today);

    var dd = tomz2.getDate()+2;
    var mm = tomz2.getMonth()+1;
    
    var yy = tomz2.getFullYear();

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd>31){
            newMM = mm+1;
            changed=true;
            if(dd==32){
                dd=1;
            }
        }else{
            newMM = mm;
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd>30){
            newMM=mm+1;
            changed=true;
            if(dd==31){
                dd=1;
            }
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        if(isLeapYear(yy)){
            if(dd>29){
                newMM=mm+1;
                changed=true;
                if(dd==30){
                    dd=1;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }else{
            if(dd>28){
                newMM=mm+1;
                changed=true;
                if(dd=29){
                    dd=1;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }
    }
    
    var tomzOne;
    if(changed==true){
        tomzOne = new Date(yy,newMM-1,dd);
    }else{
        tomzOne = new Date(yy,newMM,dd);
    }
    
    



    //mm = tomzOne.toLocaleString('default', {month: 'short'}).toUpperCase();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    tomz2 = yy+'-'+mm+'-'+dd;

    return tomz2;
}

function tomz3Date(){
    var today = new Date();
    var tomz3 = new Date(today);

    var dd = tomz3.getDate()+3;
    var mm = tomz3.getMonth()+1;
    
    var yy = tomz3.getFullYear();

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd>31){
            newMM = mm+1;
            changed=true;
            if(dd==32){
                dd=1;
            }
        }else{
            newMM = mm;
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd>30){
            newMM=mm+1;
            changed=true;
            if(dd==31){
                dd=1;
            }
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        if(isLeapYear(yy)){
            if(dd>29){
                newMM=mm+1;
                changed=true;
                if(dd==30){
                    dd=1;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }else{
            if(dd>28){
                newMM=mm+1;
                changed=true;
                if(dd=29){
                    dd=1;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }
    }
    
    var tomzOne;
    if(changed==true){
        tomzOne = new Date(yy,newMM-1,dd);
    }else{
        tomzOne = new Date(yy,newMM,dd);
    }
    
    



    //mm = tomzOne.toLocaleString('default', {month: 'short'}).toUpperCase();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    tomz3 = yy+'-'+mm+'-'+dd;

    return tomz3;
}


function prev1Date(){
    var today = new Date();
    var prev1 = new Date(today);

    var dd = prev1.getDate()-1;
    var mm = prev1.getMonth()+1;
    
    var yy = prev1.getFullYear();

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd==0){
            if(mm==3 && isLeapYear(yy)){
                dd=29;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yy)){
                dd=28;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=30;
                changed=true;
            }
        }else{
            newMM = mm;
            console.log(newMM);
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd==0){
            newMM=mm-1;
            changed=true;
            dd=31;
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        // if(isLeapYear(yyyy)){
        //     if(dd>29){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd==30){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }else{
        //     if(dd>28){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd=29){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }
        if(dd==0){
            newMM==mm-1;
            changed=true;
            dd=31;
        }else{
            newMM = mm;
            changed = false;
        }
    }
    
    var prevOne;
    if(changed==true){
        prevOne = new Date(yy,newMM-1,dd);
    }else{
        prevOne = new Date(yy,newMM-1,dd);
        console.log(prevOne);
    }
    
    



    //mm = tomzOne.toLocaleString('default', {month: 'short'}).toUpperCase();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    prev1 = yy+'-'+mm+'-'+dd;
    //console.log(prev1);

    return prev1;
}


function prev2Date(){
    var today = new Date();
    var prev2 = new Date(today);

    var dd = prev2.getDate()-2;
    var mm = prev2.getMonth()+1;
    
    var yy = prev2.getFullYear();

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd==0){
            if(mm==3 && isLeapYear(yy)){
                dd=29;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yy)){
                dd=28;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=30;
                changed=true;
            }
        }else if(dd==-1){
            if(mm==3 && isLeapYear(yy)){
                dd=28;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yy)){
                dd=27;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=29;
                changed=true;
            }
        }else{
            newMM = mm;
            console.log(newMM);
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd==0){
            newMM=mm-1;
            changed=true;
            dd=31;
        }else if(dd==-1){
            newMM=mm-1;
            changed=true;
            dd=30;
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        // if(isLeapYear(yyyy)){
        //     if(dd>29){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd==30){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }else{
        //     if(dd>28){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd=29){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }
        if(dd==0){
            newMM=mm-1;
            changed=true;
            dd=31;
        }else if(dd==-1){
            newMM=mm-1;
            changed=true;
            dd=30;
        }else{
            newMM = mm;
            changed = false;
        }
    }
    
    var prevTwo;
    console.log(changed);
    if(changed==true){
        prevTwo = new Date(yy,newMM-1,dd);
        //mm=newMM-1;
        mm=mm-1;
        console.log(prevTwo);
        
    }else{
        prevTwo = new Date(yy,newMM-1,dd);
        //mm=newMM-1;
    }
    
    



    //mm = tomzOne.toLocaleString('default', {month: 'short'}).toUpperCase();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    prev2 = yy+'-'+mm+'-'+dd;
    console.log(prev2);

    return prev2;
}


function prev3Date(){
    var today = new Date();
    var prev3 = new Date(today);

    var dd = prev3.getDate()-3;
    var mm = prev3.getMonth()+1;
    
    var yy = prev3.getFullYear();

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd==0){
            if(mm==3 && isLeapYear(yy)){
                dd=29;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yy)){
                dd=28;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=30;
                changed=true;
            }
        }else if(dd==-1){
            if(mm==3 && isLeapYear(yy)){
                dd=28;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yy)){
                dd=27;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=29;
                changed=true;
            }
        }else if(dd==-2){
            if(mm==3 && isLeapYear(yy)){
                dd=27;
                newMM = mm-1;
                changed=true;
            }else if(mm==3 && !isLeapYear(yy)){
                dd=26;
                newMM = mm-1;
                changed=true;
            }else{
                newMM = mm-1;
                dd=28;
                changed=true;
            }
        }else{
            newMM = mm;
            console.log(newMM);
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd==0){
            newMM=mm-1;
            changed=true;
            dd=31;
        }else if(dd==-1){
            newMM=mm-1;
            changed=true;
            dd=30;
        }else if(dd==-2){
            newMM=mm-1;
            changed=true;
            dd=29;
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        // if(isLeapYear(yyyy)){
        //     if(dd>29){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd==30){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }else{
        //     if(dd>28){
        //         newMM=mm+1;
        //         changed=true;
        //         if(dd=29){
        //             dd=1;
        //         }
        //     }else{
        //         newMM = mm;
        //         changed=false;
        //     }
        // }
        if(dd==0){
            newMM=mm-1;
            changed=true;
            dd=31;
        }else if(dd==-1){
            newMM=mm-1;
            changed=true;
            dd=30;
        }else if(dd==-2){
            newMM=mm-1;
            changed=true;
            dd=29;
        }else{
            newMM = mm;
            changed = false;
        }
    }
    
    var prevThree;
    if(changed==true){
        prevThree = new Date(yy,newMM-1,dd);
        mm=mm-1;
        console.log(prevThree);
        
    }else{
        prevThree = new Date(yy,newMM-1,dd);
    }



    //mm = tomzOne.toLocaleString('default', {month: 'short'}).toUpperCase();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    prev3 = yy+'-'+mm+'-'+dd;

    return prev3;
}


function todayzDate(){
    var today = new Date();
    var todayz = new Date(today);

    var dd = todayz.getDate();
    var mm = todayz.getMonth()+1;
    
    var yy = todayz.getFullYear();

    if(mm==1 || mm == 3 || mm == 5 || mm == 7 || mm==8 || mm==10 || mm==12){
        if(dd>31){
            newMM = mm+1;
            changed=true;
            if(dd==32){
                dd=1;
            }
        }else{
            newMM = mm;
            changed=false;
        }
    }else if(mm==4 || mm==6 || mm==9 || mm==11){
        if(dd>30){
            newMM=mm+1;
            changed=true;
            if(dd==31){
                dd=1;
            }
        }
        else{
            newMM = mm;
            changed=false;
        }
    }else{
        if(isLeapYear(yy)){
            if(dd>29){
                newMM=mm+1;
                changed=true;
                if(dd==30){
                    dd=1;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }else{
            if(dd>28){
                newMM=mm+1;
                changed=true;
                if(dd=29){
                    dd=1;
                }
            }else{
                newMM = mm;
                changed=false;
            }
        }
    }
    
    var tomzOne;
    if(changed==true){
        tomzOne = new Date(yy,newMM-1,dd);
    }else{
        tomzOne = new Date(yy,newMM,dd);
    }
    
    



    //mm = tomzOne.toLocaleString('default', {month: 'short'}).toUpperCase();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    todayz = yy+'-'+mm+'-'+dd;

    return todayz;
}