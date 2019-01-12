// Create a function in your program that counts from 0 to [NUMBER]

/*
define the function and tie the end of the counting to the entered number.
I need to shorten my [var], [fun] and [parameter] names maybe?
if you use [for] you can tie it all together.
in [while] you have to define the start in or outside of the loop.
how would one complete with a [do,while] function?
ctrl+shift+up arrow will move whole loop while on either end,
if you are inside it will move the contents only.

 */

function  to_your_number(num_end)
{
    var numStr = 0;

    while(numStr <= num_end)
    {
        console.log(numStr);
        numStr+=1

    }

    // var curNum = 0;
    // do
    // {
    //
    //     console.log(curNum);
    //     curNum++;
    // }
    // while(curNum <= num_end);




    // for(var star = 0; star <=num_end ; star++)
    // {
    //     console.log(star);
    // }
}

to_your_number(30);