function to_string(object, value) {
	if (object.type != "String") {
		object.print_val = "\"" + object.val + "\"";
		object.type = value;
	}
}

function to_number(object, value) {
	if (object.type != "Number") {
		object.print_val = object.val;
		object.type = value
	}
}

function to_object(object, value) {
	if (object.type != "Object") {
		object.print_val = "{" + object.val + "}";
		object.type = value;
	}
}

function to_array(object, value) {
	if (object.type != "Array") {
		object.print_val = "[" + object.val + "]";
		object.type = value;
	}
}

const dynamicType = {
	val: undefined,  // 진짜 값
	print_val: undefined,  // 출력용
	type: undefined,
	put: function (value) {
		this.val = value;
		this.print_val = this.val;  // 안해도 된다.
	},
	change: function (value) {
		if (value == "String") {
			to_string(this, value);
		} else if (value == "Number") {
			to_number(this, value);
		} else if (value == "Object") {
			to_object(this);
		} else if (value == "Array") {
			to_array(this);
		}
	},
	printType: function (value) {
		console.log("- " + this.print_val);
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

type.put(1);
type.change("Number");
type.printType();
