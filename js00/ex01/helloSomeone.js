export default function helloSomeone(x) {
  if (typeof x === "string") {
    if (x === "") console.log("Who are you?");
    else console.log(`Hello ${x}!`);
  }
  if (x === null) console.log("I am null and void");
  if (typeof x === "number") {
    if (x <= 0) console.log("I am Benjamin Button!");
    else if (isNaN(x)) console.log("Age is just a number");
    else console.log(`My age is ${x}`);
  }
  if (typeof x === "undefined") console.log("Nobody can define me!");
}

// console.log(typeof NaN); // number
// helloSomeone("42");
// helloSomeone("");
// helloSomeone(null);
// helloSomeone(42);
// helloSomeone(-1);
// helloSomeone(NaN);
// helloSomeone(undefined);

