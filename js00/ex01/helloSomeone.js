export default function helloSomeone(param) {
    if (typeof param == 'string') {
        if (param == '')
            console.log("Who are you?");
        else
            console.log("Hello %s!", param);
    }
    else if (typeof param == 'number' && !isNaN(param)) {
        if (param <= 0)
            console.log("I am Benjamin Button!");
        else
            console.log("My age is %d", param);
    }
    else if (typeof param == 'undefined')
        console.log("Nobody can define me!");
    else if (isNaN(param))
        console.log("Age is just a number");
    else if (!param)
        console.log("I am null and void");
    else
        console.log("Error ....")
}