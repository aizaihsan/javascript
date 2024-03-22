
function divison(a,b)
{
    if(b==0)
    {
        throw new Error ("Error! Division by zero is not allowed");
    }
    else if(typeof(a)!= Number || typeof(b) != Number ){
        throw new TypeError("Inavlid Argument Type Integer expected");
    }
}

try{
 divison(3,'4f');
}
catch(error)
{
    if ( error instanceof TypeError)
    {
        console.log(error.message)
    }
    else if(error)
    {
        console.log(error.message)
    }
}