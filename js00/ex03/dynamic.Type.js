const dynamicType = {
    before : {
        type : "Number",
        value : undefined
        },
    after : {
        type : undefined,
        value : undefined
    },
    put : function(arg){
        this.before.value = arg
    },
    change : function(arg){
        this.after.type = arg;
        if (arg ==  "String")
        {  
            this.after.value = String(this.before.value);
        } 
        else if (arg ==  "Number")
        {
            this.after.value = Number(this.before.value);
        }
        else if (arg ==  "Object as an Object")
        {
            this.after.value = []
            this.after.value.push(this.before.value);
        }
        else if (arg ==  "Object as an Array")
        {
            this.after.value = new Number(this.before.value);
        }
    },
    printType: function() {
		if(this.after.type === "Number")
			console.log(this.before.value);
		else if(this.after.type === "String")
			console.log(`"${this.after.value}"`);
		else if(this.after.type === "Array")
			console.log(`[${this.after.value}]`);
		else if(this.after.type === "Object")
			console.log(`{${this.after.value}}`);
	}
}

dynamicType.put(42);
dynamicType.change("String");
dynamicType.printType();

dynamicType.put(42);
dynamicType.change("Number");
dynamicType.printType();

dynamicType.put(42);
dynamicType.change("Array");
dynamicType.printType();

dynamicType.put(42);
dynamicType.change("Object");
dynamicType.printType();

