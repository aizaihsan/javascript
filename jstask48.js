function check_integer(num)
{
    if(Number.isInteger(num))
    {
        console.log(num + " is a integer ")
    }
    else{
      
        throw("The Number is not integer");       
    }
}
try{
check_integer(10.5);
}
catch(error){
    console.log("Error: ", error);
}

