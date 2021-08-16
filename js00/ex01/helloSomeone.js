function helloSomeone(parameter) {
	if (typeof parameter === "string")
	{
		if (parameter === "")
			console.log("Who are you?");
		else 
			console.log("Hello " + parameter + "!");
	}
	else if (parameter === null)
		console.log("I am null and void");
	else if (typeof parameter === "number")
	{
		if (isNaN(parameter))
		console.log("Age is just a number");
		else if (parameter < 0)
			console.log("I am Benjamin Button!");
		else
			console.log("My age is " + parameter);
	}
	else if (typeof parameter === "undefined")
		console.log("Nobody can define me!");
}

export default helloSomeone;