function count_occurences(str)
{

    let str2=[];
    let counter=0;
    for(let i =0;i<str.length;i++)
    {

        let char = str[i];
        for(let j =0;j<str.length;j++)
        {
            if (char== str[j])
            { 
                counter++;
            }
        }
        str2.push(counter +" "+ char);
        counter=0;

    } 

    console.log(str2);

}
count_occurences("The quick brown fox jumps over the lazy dog");