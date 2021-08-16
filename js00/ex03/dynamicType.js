const dynamicType = {
	val: 0,
    put : function(x) {
		this.val = x;
		// console.log(this.val);
	},
    change : function(type) {
		if (type === "Number") ;
		if (type === "String") {
			this.val = this.val.toString();
			// console.log(this.val);
		}
		if (type === "Object") {
			this.val = {value: this.val};
		}
		if (type === "Array") {
			this.val = [this.val];	
		}
	},
    printType : function() {
		// console.log(typeof this.val);
		console.log(this.val);
	} 
}

const type = dynamicType;

// type.put({1: "one"}); // type === Number
// type.change("Array"); // convert to array with the input;
// type.printType(); // print the converted value on console;
