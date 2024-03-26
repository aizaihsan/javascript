function check_pelindrome(str)
{
    let len = str.length;
    for( let i =0; i<len/2;i++)
    {
        if (str[i]==str[len-1-i] )
        {
            check = true;
        }
        else{
            check= false;
            break;
        }
    }
    console.log(check);
}
check_pelindrome("madam");
