export default function helloSomeone(arg) {
  switch (typeof arg) {
    case 'string':
      if (arg.length) console.log(`Hello ${arg}!`);
      else console.log('Who are you?');
      break;
    case 'object':
      if (arg == null) console.log('I am null and void');
      break;
    case 'number':
      if (Number.isNaN(arg)) console.log('Age is just a number');
      else if (arg > 0) console.log(`My age is ${arg}`);
      else console.log('I am Benjamin Button!');
      break;
    case 'undefined':
      console.log('Nobody can define me!');
      break;
    default:
      console.log('Nothing....');
      break;
  }
}
