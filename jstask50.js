function checkarray(arr)
{
    if(arr.length === 0)
    {
        throw (" Array is Empty");
    
    }
    else{
        console.log("array is not empty");
    }
}
try {

    checkarray([]); 
}
catch(error){
    console.log("error : ", error);
}