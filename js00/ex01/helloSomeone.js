export default function helloSomeone (arg){
    if (arg === undefined)
    console.log("Nobody can define me!");
    else if (typeof(arg) == "string")
    {
        if (arg.length != 0)
            console.log("My name is "+ arg);
        else
            console.log("Who are you?");
    }
    else if (arg === null)
        console.log("I am null and void" );
    else if (isNaN(arg))
        console.log("Age is just a number");
    else if (typeof(arg) == "number")
    {
        if (Number(arg) <= 0)
            console.log("I am Benjamin Button!");
        else
            console.log("My age is " + arg);
    }
}
