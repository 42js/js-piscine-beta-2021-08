const dynamicType = {
	value : '',
	changeValue: '',
	put,
	change,
	printType,
}

function put (input) {
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
			break;
	}
}

function printType () {
	console.log(dynamicType.changeValue);
}
