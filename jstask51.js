function checkarray(arr , index)
{
    if(index >= arr.length)
    {
        throw (" Index is out of bound");
    
    }
    else{
        console.log("Index found");
    }
}
try {

    checkarray([1,2,4,6],5); 
}
catch(error){
    console.log("error : ", error);
}