function helloSomeone(parameter)
{
    if (parameter == "")
        console.log("Who are you?");
    else if (parameter == null && parameter != undefined)
        console.log("I am null and void");
    else if (parameter == undefined)
        console.log("Nobody can define me!");
    else if (parameter == 42 && typeof parameter == "number")
        console.log("My age is 42");
    else if (parameter == -1)
        console.log("I am Benjamin Button!");
    else if (typeof parameter != Number)
        console.log("Age is just a number");
    else
        console.log("Hello " + parameter);
}

export default helloSomeone;