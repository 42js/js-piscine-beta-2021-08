export default function helloSomeone(arg) {
    if (typeof arg === 'string')
        if (arg === '') console.log('Who are you?');
        else console.log(`My name is ${arg}`);
    else if (arg === null) console.log('I am null and void');
    else if (typeof arg === 'number')
        if (arg <= 0) console.log('I am Benjamin Button!');
        else if (isNaN(arg)) console.log('Age is just a number');
        else console.log(`My age is ${arg}`);
    else if (arg === undefined) console.log('Nobody can define me!');
    else return;
}
