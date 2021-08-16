export default (thing) => {
	if (typeof thing === 'string') {
		if (thing === '')
			return console.log('Who are you?');
		return console.log(`Hello ${thing}!`);
	}
	else if (thing === null)
		return console.log('I am null and void');
	else if (typeof thing === 'number') {
		if (thing <= 0)
			return console.log('I am Benjamin Button!');
		else if (isNaN(thing) === true)
			return console.log('Age is just a number');
		return console.log(`My age is ${thing}`);
	}
	else if (thing === undefined)
		return console.log('Nobody can define me!');
	else
		return console.log('Wrong Input!');
}
