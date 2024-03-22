function evaluate_Expression(exp) {
    const result = eval(exp);
    console.log(result);
    console.log(typeof(result));
    if (typeof(result)!= Number )  {
        throw new SyntaxError("Invalid expression");
    }
        return result;


   
}

try {
    const result = evaluate_Expression('30-  ');
    console.log('Result:', result);
}
 catch (error) {
    if ( error instanceof SyntaxError)
    {
        console.log(error.message);
    }
}
