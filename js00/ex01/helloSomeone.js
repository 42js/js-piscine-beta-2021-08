export default function helloSomeone(msg) {
    if (msg === null)
        console.log("I am null and void");
    else if (msg === "")
        console.log("Who are you?");
    else if (msg === undefined)
        console.log("Nobody can define me!");
    else if (typeof msg === "string")
        console.log("hello " + msg);
    else if (typeof msg === "number" && msg > 0)
        console.log("My age is " + msg);
    else if (typeof msg === "number" && msg <= 0)
        console.log("I am Benjamin Button");
    else if (typeof msg === "number")
        console.log("Age is just a number");
}