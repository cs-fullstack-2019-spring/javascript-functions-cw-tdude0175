//Create 4 functions called
// add, subtract, multiply, and divide.
// Create them to allow a user to perform
// the name of the function to the two numbers and return the result.

/*
easy enough to create functions that do math with two numbers.
able to add more number than a function can use?
no parameters maybe, or excess parameters and if no num =0?
function parameters can share names with var and still function
BAD MOVE to share names, makes code harder to read and can be confusing later.
[function] able to call an outside [function] or does it have to be inside.
it can call it from outside, just like calling a var maybe?


 */



function addition(addTar1,addTar2)
{
    return parseInt(addTar1 + addTar2)
}

function subtraction(subTar1,subTar2)
{
    return parseInt(subTar1 - subTar2)
}

function multiplication(mulTar1,mulTar2)
{
    return parseInt(mulTar1*mulTar2)
}
function division(divTar1,divTar2)
{
    return parseInt(divTar1/divTar2)
}

function calculator(num1,num2)
{

    var operation = prompt("what would you like to do with these number?");

    if(operation === "add")
    {
        return addition(num1,num2);
    }
    else if( operation === "subtract")
    {
        return subtraction(num1,num2);
    }
    else if(operation === "multiply")
    {
        return multiplication(num1,num2);
    }
    else if(operation === "divide")
    {
        return division(num1,num2);

    }
    else
        {
            alert("Not a working operation.");
        }
}

console.log(calculator(8,5));

/*
simply returning the worked numbers.
to console.log or alert needs the appropriate function defined before return.
or console.log or alert the function at the end

 */