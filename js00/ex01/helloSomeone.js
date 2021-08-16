export default function helloSomeone(arg) {
    if (typeof(arg) == 'string') {
        if (arg.length == 0) console.log('Who are you?');
        else console.log(`Hello ${arg}!`);
    }
    else if (arg === undefined) console.log('Nobody can define me!');
    else if (arg === null) console.log('I am null and void');
    else if (typeof(arg) == 'number') {
        if (arg < 0) console.log('I am Benjamin Button!');
        else if (isNaN(arg) == true) console.log('Age is just number');
        else console.log(`My age is ${arg}`);
    }
}