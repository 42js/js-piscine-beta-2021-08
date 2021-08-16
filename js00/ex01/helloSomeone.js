export default function helloSomeone(arg) {
    if (typeof arg == 'string') {
        if (arg == "")
            console.log('Who are you?');
        else
            console.log("Hello " + arg + "!");
    }
    else if (typeof arg == 'object') {
        if (arg == null)
            console.log("I am null and void");
    }
    else if (typeof arg == 'number' && !isNaN(arg)) {
        if (arg > 0)
            console.log("My age is %d", arg);
        else
            console.log("I am Benjamin Button!");
    }
    else if (isNaN(arg) && typeof arg != 'undefined')
        console.log("Age is just a number");
    else if (typeof arg == 'undefined')
        console.log("Nobody can define me!");
    else
        return ;
}
