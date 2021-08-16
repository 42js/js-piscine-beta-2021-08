export default function helloSomeone(str) {
  if (str === '42') console.log('Hello 42!');
  else if (str === '') console.log('Who are you?');
  else if (str === null) console.log('I am null and void');
  else if (str === -1) console.log('I am Benjamin Button!');
  else if (str === undefined) console.log('Nobody can define me!');
  else if (isNaN(str)) console.log('Age is just a number');
  else {
    console.log(`My age is ${str}`);
  }
}
