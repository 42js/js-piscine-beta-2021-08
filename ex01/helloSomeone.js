export default function helloSomeone(param){
    if (param === "")
        console.log("Who are you?");
    else if (typeof(param) == "string")
        console.log("Hello " + param + "!");
    else if(param === null)
        console.log("I am null and void");
    else if (param === undefined)
        console.log("Nobody can define me!")
	else if(isNaN(param) == true)
        console.log("Age is just a number");
    else if (typeof(param) == "number")
    {
        if (param <= 0)
            console.log("I am Benjamin Button!");
        else
            console.log("My age is " + param);
    }

}
