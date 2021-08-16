export default function helloSomeone(variable) {
  let message;
  if (typeof variable === "string") {
    if (variable == "")
      message = "Who are you?";
    else
      message = "Hello " + variable + "!";
  }
  else if (variable === null)
    message = "I am null and void";
  else if (typeof variable === "number") {
    if (variable <= 0)
      message = "I am Benjamin Button!";
    else if (variable > 0)
      message = "My age is " + variable;
    else 
      message = "Age is just a number";
  }
  else if (variable === undefined)
    message = "Nobody can define me!";
  console.log(message);
}