function returnHello(someone) {
    if (someone === undefined)
        return 'Nobody can define me!';
    if (someone === null)
        return 'I am null and void';
    if (typeof someone === 'number' && isFinite(someone)) {
        if (someone <= 0)
            return 'I am Benjamin Button!';
        return `My age is ${someone}`;
    }
    if (typeof someone === 'string') {
        if (someone === '')
            return 'Who are you?';
        return `Hello ${someone}!`;
    }
    return 'Age is just a number';
}

export default function helloSomeone(someone) {
    console.log(returnHello(someone)); 
}