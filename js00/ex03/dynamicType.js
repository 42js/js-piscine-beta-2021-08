const dynamicType = {
	val: null,
	changedVal: null,
	printFlag: 0,
    put : function(x) {
		if (this.printFlag === 0) {
			this.val = x;
			this.printFlag = 1;
		} 
		else console.log("put error: only one time before printType!");
	},
    change : function(type) {
		if (this.printFlag === 0 && this.val === null) {
			console.log("change error: put before change!")
			return ;
		}
		if (type === "Number") this.changedVal = this.val;
		if (type === "String") {
			this.changedVal = String(this.val);
		}
		if (type === "Object") {
			this.changedVal = {value: this.val};
		}
		if (type === "Array") {
			this.changedVal = [this.val];	
		}
	},
    printType : function() {
		console.log(this.changedVal);
		this.printFlag = 0;
	} 
}

const type = dynamicType;

// type.put(42);
// type.change("Array");
// type.change("Object");
// type.printType();

// type.put(42); // type === Number
// type.put(20);
// type.put(1);
// type.change("String"); // convert to array with the input;
// type.printType(); // print the converted value on console;

// type.put(1994);
// type.change("String");
// type.printType();
