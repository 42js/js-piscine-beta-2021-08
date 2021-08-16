export default function helloSomeone(input) {
  switch (typeof input) {
    case `number`:
      if (isNaN(input))
        console.log(`Age is just a number`);
      else {
        if (input <= 0)
          console.log(`I am Benjamin Button!`);
        else
          console.log(`My age is ${input}`);
      }
      break;
    case `undefined`:
      console.log(`Nobody can define me!`);
      break;
    case `object`:
      if (input === null)
        console.log(`I am null and void`);
      else
        console.log(`I am object, not null! (not included in the question)`);
      break;
    case `symbol`:
      console.log(`I am symbol! (not included in the question)`);
      break;
    case `bigint`:
      console.log(`I am bigint! (not included in the question)`);
      break;
    default:	// string
      if (input === '')
        console.log(`Who are you?`);
      else
        console.log(`Hello ${input}!`);
  }
}