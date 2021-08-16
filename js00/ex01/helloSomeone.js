
export default function helloSomeone(someone) {
  switch (typeof someone) {
    case 'string' :
      if (someone == '') {
        console.log('Who are you?');
        break;
      }
      console.log('Hello ' + someone);
      break;
    case 'object' :
      console.log('I am null and void');
      break;
    case 'number' :
      if (someone <= 0) {
        console.log("I am Benjamin Button!");
      }
      else if (someone > 0) {
        console.log('My age is ' + someone);
      } else {
        console.log('Age is just a number');
      }
      break;
    case 'undefined' :
      console.log("Nobody can define me!");
  }
}
