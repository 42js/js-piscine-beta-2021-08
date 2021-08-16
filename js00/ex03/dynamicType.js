const dynamicType = {
	value : '',
	changeValue: '',
	put,
	change,
	printType,
}

function put (input) {
	if (isNaN(input) || typeof input !== 'number')
		return console.log('Wrong Input!');
	dynamicType.value = input;
	dynamicType.changeValue = input;
}

function change (input) {
	switch (input) {
		case 'String':
			dynamicType.changeValue = String(dynamicType.value);
			break;
		case 'Number':
			dynamicType.changeValue = Number(dynamicType.value);
			break;
		case 'Object':
			dynamicType.changeValue = { value: dynamicType.value };
			break;
		case 'Array':
			dynamicType.changeValue = [dynamicType.value];
			break;
		default:
			return console.log('Wrong Input!');
			break;
	}
}

function printType () {
	console.log(dynamicType.changeValue);
}
