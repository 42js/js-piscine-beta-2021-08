const helloSomeone = (arg) => {
    if (typeof arg === 'string' && arg === '')
        console.log('Who are you?');
    else if (typeof arg === 'string')
        console.log(`Hello ${arg}!`);
    else if (arg === null)
        console.log('I am null and void');
    else if (typeof arg === 'number' && !isNaN(arg))
    {
        if (arg > 0)
            console.log(`My age is ${arg}`);
        else
            console.log('I am Benjamin Button!');
    }
    else if (isNaN(arg) && typeof arg === 'number')
        console.log('Age is just a number');
    else if (typeof arg === 'undefined')
        console.log('Nobody can define me!');
};

export default helloSomeone;