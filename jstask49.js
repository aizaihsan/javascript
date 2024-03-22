function checksecond(a,b)
{
    if(b==0)
    {
        throw("Second number is zero");
    }
    else{
        return a/b;
    }
}
try{
    console.log(checksecond(10,0));

}
catch(error){
    console.log("error : ", error);
}