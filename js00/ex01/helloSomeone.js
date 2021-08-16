export default function helloSomeone(input)
{
if (typeof input == "undefined")	// undefined
	return console.log("Nobody can define me!");
else if (isNaN(input))	// NaN
	return console.log("Age is just a number");
else if (typeof input == "object")	//null
	return console.log("I am null and void");
else if (typeof input == "string")	// string
	if (input == "")	// ""
		return console.log("Who are you?");
	else
		return console.log("Hello " + input + "!");
else if (typeof input == "number")	// number
	if (input <= 0)
		return console.log("I am Benjamin Button!");
	else
		return console.log("My age is " + input);
}
