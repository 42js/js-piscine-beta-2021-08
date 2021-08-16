function to_string(object, value) {
	if (object.type != "String") {
		object.copy_val = "\"" + object.val + "\"";
		object.type = value;
	}
}

function to_number(object, value) {
	if (object.type != "Number") {
		object.copy_val = object.val;
		object.type = value
	}
}

function to_object(object, value) {
	if (object.type != "Object") {
		object.copy_val = {
			val: object.val
		}
		object.type = value;
	}
}

function to_array(object, value) {
	if (object.type != "Array") {
		object.copy_val = [object.val];
		object.type = value;
	}
}

const dynamicType = {
	val: 0,
	copy_val: 0,
	type: "Number",
	put: function (value) {
		this.val = value;
		this.copy_val = this.val;
	},
	change: function (value) {
		if (value == "String") {
			to_string(this, value);
		} else if (value == "Number") {
			to_number(this, value);
		} else if (value == "Object") {
			this.type = value;
			to_object(this);
		} else if (value == "Array") {
			this.type = value;
			to_array(this);
		}
	},
	printType: function (value) {
		console.log(this.copy_val);
	}
}


type = dynamicType;
type.put(42);
type.change("String");
type.printType();

type.put(12);
type.change("Array");
type.printType();

type.put(29);
type.change("Object");
type.printType();
