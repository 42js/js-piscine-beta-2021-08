
export default function helloSomeone(arg) {
	const type = typeof(arg);
	console.log
	if (type === 'string') {
		if (arg)
			console.log(`Hello ${arg}!`);
		else
			console.log("Who are you?");
	}
	else if (arg === null) {
		console.log("I am null and void");
	}
	else if (type === 'number') {
		if (arg <= 0)
			console.log("I am Benjamin Button!");	
		else if (!isNaN(arg))
			console.log(`My age is ${arg}!`);
		else
			console.log("Age is just a number");
	}
	else {
		console.log("Nobody can define me!");
	}
}
