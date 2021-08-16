function is_number(input) {
	var n = /^\d+$/;
	return n.test(input);
}

export default (input) => {
	if (typeof input == 'number') {
		if (input > 0)
			return console.log("My age is " + input);
		else if (input <= 0 )
			return console.log("I am Benjamin Button!");
		else if (is_number(input) == false)
                        return console.log("Age is just a number")
	} else if (typeof input == 'string') {
		if (input == '')
			return console.log("Who are you?");
		return console.log("My name is " + input);
	} else if (input === null)
		return console.log("I am null and void");
	else if (input === undefined)
		return console.log("Nobody can define me!");
}
