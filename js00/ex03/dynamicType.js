const dynamicType = {
	data : null,
	type : null,
	put : function put(num) {
			if (typeof(num) == "number")
			{
				this.data = num;
				this.type = "Number"
			}
			else
			{
				console.log("You have to put Number.")
			}
		  },
	change : function change(type){
				 this.type = type;
			 },
	printType : function printType(){
				if (this.type == "String")
					console.log("\"" + String(this.data) + "\"");
				else if (this.type == "Number")
					console.log(this.data);
				else if (this.type == "Object")
					console.log(Object(this.data));
				else if (this.type == "Array")
					console.log([this.data]);
				else
					console.log("Only String, Number, Object, Array can be changed");
				}
}
