function helloSomeone(arg) {
  if (typeof arg === 'string') {
    if (arg.length) console.log(`Hello ${arg}!`);
    else console.log('Who are you?');
  } else if (typeof arg === 'object' && arg == null) {
    console.log('I am null and void');
  } else if (typeof arg === 'number') {
    if (Number.isNaN(arg)) console.log('Age is just a number');
    else if (arg > 0) console.log(`My age is ${arg}`);
    else console.log('I am Benjamin Button!');
  } else if (typeof arg === 'undefined') {
    console.log('Nobody can define me!');
  }
}

export { helloSomeone as default };
