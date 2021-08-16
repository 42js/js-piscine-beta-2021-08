function helloSomeone(param) {
  if (typeof param === "string") {
    if (param === "") {
      console.log("Who are you?");
    } else {
      console.log(`Hello ${param}!`);
    }
  } else if (param === null) {
    console.log("I am null and void");
  } else if (typeof param === "number" && !isNaN(param)) {
    if (param <= 0) {
      console.log("I am Benjamin Button!");
    } else {
      console.log(`My age is ${param}`);
    }
  } else if (param!==undefined && isNaN(param)) {
    console.log("Age is just a number");
  } else if (param === undefined) {
    console.log("Nobody can define me!");
  }
}

// export default helloSomeone;
module.exports = helloSomeone;
