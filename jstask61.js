function find_combinations(str)
{
    var arr = []
    for ( let i=0; i<str.length; i++)
    {
        for( let j=i+1; j <str.length + 1; j++)
        {
            arr.push (str.slice(i,j) );

        }
    }

    console.log(arr);
}

find_combinations ("cat");