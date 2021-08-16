export default function helloSomeone(param)
{
	if (typeof param === "string") {
		if (param === "")
			console.log("Who are you?");
		else
			console.log("Hello " + param + "!");
	}
	else if (typeof param === "number") {
		if (param <= 0)
			console.log("I am Benjamin Button!");
		else if (isNaN(param))
			console.log("Age is just a number");
		else
			console.log("My age is " + param);
	}
	else if (typeof(param) == "undefined")
		console.log("Nobody can define me!");
	else if (param == null)
		console.log("I am null and void");
}
