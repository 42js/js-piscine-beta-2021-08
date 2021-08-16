const dynamicType = {
	original: { type: "Number", value: undefined },
	cast: { type: undefined, value: undefined },
	put: function(param) {
		this.original.value = param;
	},
	change: function(type) {
		this.cast.type = type;
		if(type === "Number")
			this.cast.value = this.original.value;
		else if(type === "String")
			this.cast.value = this.original.value + "";
		else if(type === "Array")
			this.cast.value = [this.original.value];
		else if(type === "Object")
			this.cast.value = new Number(this.original.value);
	},
	printType: function() {
		if(this.cast.type === "Number")
			console.log(this.original. value);
		else if(this.cast.type === "String")
			console.log(`"${this.cast.value}"`);
		else if(this.cast.type === "Array")
			console.log(`[${this.cast.value}]`);
		else if(this.cast.type === "Object")
			console.log(`{${this.cast.value}}`);
	}
}

dynamicType.put(42);
dynamicType.change("String");
dynamicType.printType();

dynamicType.put(4242);
dynamicType.change("Number");
dynamicType.printType();

dynamicType.put(424242);
dynamicType.change("Array");
dynamicType.printType();

dynamicType.put(42424242);
dynamicType.change("Object");
dynamicType.printType();

dynamicType.change("String");
dynamicType.put(4242424242);
dynamicType.printType();
