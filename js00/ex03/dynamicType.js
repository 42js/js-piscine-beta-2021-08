const dynamicType = {
	put : function(input) {
		if (typeof input == 'number')		
			this.number = input;
		else
			console.log("Error! Put Number");
	},
	change : function(input) {
			if (input == "String")
				this.number = String(this.number);
			else if (input == "Object")
				this.number = {number: this.number};
			else if (input == "Array")
				this.number = [this.number];
			else if (input == "Number")
				this.number = Number(this.number);
			else
				console.log("Error!");
	},
	printType : function() {
			console.log(this.number);
	}
}		

console.log("------Number------");
let test1 = dynamicType;
test1.put(42);
test1.change("Number");
test1.printType();

let test2 = dynamicType;
console.log("------String------");
test2.put(42);
test2.change("String");
test2.printType();

let test3 = dynamicType;
console.log("------Object------");
test3.put(42);
test3.change("Object");
test3.printType();

let test4 = dynamicType;
console.log("------Array------");
test4.put(42);
test4.change("Array");
test4.printType();
