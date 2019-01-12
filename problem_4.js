//Create a function called checkPassword.
// Send two string variables to the checkPassword function to check if the strings are equal.
// Return true if they are equal and false if they are not equal.
// Print the function's return value.

/*
you can set password goal [var] inside or outside function.
you could save password to a list for safe keeping for later.
hide access to password list behind function.
else if can work for simple access.
[do,while] loop for repetitive check.


 */
var usr1Pas = "C0d3Cr3w";

function checkPassword(usrPasIpt)
{
    do
        {
            usrPasIpt = prompt("please input password.");
            if (usrPasIpt === usr1Pas)
            {
                console.log(usrPasIpt);
                alert("welcome User 1.");
                usrPasIpt = true;
            }
            else if(usrPasIpt !== usr1Pas)
                {
                    console.log(usrPasIpt);
                    alert("Password is incorrect");
                    usrPasIpt = prompt("Would you like to continue? Y = yes N = no");
                    if(usrPasIpt === "y" || usrPasIpt ==="Y")
                    {
                        console.log(usrPasIpt);
                    } else
                        {
                            console.log(usrPasIpt)
                            alert("have a nice day");
                            break
                        }
                }

    }
    while (usrPasIpt !== true);


}

checkPassword(123);