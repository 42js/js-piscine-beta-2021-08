function to_string(object, value) {
	// 객체의 type 이 change() 의 인자와 다른 경우
	if (object.type != value) {
		object.print_val = "\"" + object.val + "\"";
		object.type = value;
	}
}

function to_number(object, value) {
	// 객체의 type 이 change() 의 인자와 다른 경우
	if (object.type != value) {
		object.print_val = object.val;
		object.type = value
	}
}

function to_object(object, value) {
	// 객체의 type 이 change() 의 인자와 다른 경우
	if (object.type != value) {
		object.print_val = "{" + object.val + "}";
		object.type = value;
	}
}

function to_array(object, value) {
	// 객체의 type 이 change() 의 인자와 다른 경우
	if (object.type != value) {
		object.print_val = "[" + object.val + "]";
		object.type = value;
	}
}

const dynamicType = {
	val: undefined,  // 진짜 값
	print_val: undefined,  // 출력용
	type: undefined,  // type 을 저장하는 변수
	put: function (value) {
		this.val = value;
		this.print_val = this.val;  // 안해도 된다.
	},
	change: function (value) {
		if (value == "String") {
			to_string(this, value);  // string format 으로 변환시킨다.
		} else if (value == "Number") {
			to_number(this, value);  // number format 으로 변환시킨다.
		} else if (value == "Object") {
			to_object(this);  // object format 으로 변환시킨다.
		} else if (value == "Array") {
			to_array(this);  // array format 으로 변환시킨다.
		}
	},
	printType: function (value) {
		console.log("- " + this.print_val);  // "- 42" 이런 format 으로 출력
	}
}

/* test
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

type.change("Object");
type.printType();

type.change("Array");
type.printType();
*/
