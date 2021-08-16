export default function helloSomeone(arg){
    if (typeof(arg) == 'string'){
        if (arg != ''){
            console.log(`Hello ${arg}!`);
            return;
        }
        console.log('Who are you?');
        return;
    } else if (arg === null){
        console.log('I am null and void');
        return;
    } else if (typeof(arg) == 'undefined'){
        console.log('Nobody can define me!');
        return;
    } else if (typeof(arg) == 'number'){
        if (arg > 0){
            console.log(`My age is ${arg}`);
            return;
        } else if (arg <= 0){
            console.log('I am Benjamin Button!');
            return;
        } else {
            console.log('Age is just a number');
            return;
        }
    }
};