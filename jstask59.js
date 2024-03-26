function reverse(num)
{
    var ReversedNumber = 0;
    for(let i = 0; num!=0 ;i++){

        var reminder = num % 10;
        num = Math.floor(num / 10) ;
        ReversedNumber = ReversedNumber * 10 + reminder; 
    }

    console.log(ReversedNumber);
    
}


reverse(1234);