const dynamicType = {
	num : undefined,
	numAfter: undefined,
	isEmpty: true,
	put : function(input) {
		if(this.isEmpty === false)
			return;
		this.num = input;
		this.isEmpty = false;
	},
	change : function(type) {
		if (this.isEmpty == true)
			return;
		if (type === "String")
			this.numAfter = this.num + "";
		else if (type === "Number")
			this.numAfter = this.num;
		else if (type === "Object")
			this.numAfter = new Object(this.num);
		else if (type === "Array")
			this.numAfter = [this.num];
	},
	printType : function() {
		console.log(this.numAfter);
	},
}
