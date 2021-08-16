// in dynamicparam.js

const dynamicType = {
	value : "",

	put : function(param){
		if (typeof param == "number")
			value = param;
		else
			console.log("error : not Number Type");
	},

	change : function(param){
		if (param == "")
			return console.log("error : Cannot change data type.");
		if (typeof param == "string")
			value = String(value);
		else if (typeof param == "object")

		else if (Array.isArray(param))
			value = Array(value);
	},

	printType : function(){
		if (value == "")
			return console.log("error : Unable to output.");
		else if (typeof value == "string")
			console.log('"' + value + '"');
		else if (typeof value == "number")
			console.log(value);
		else if (typeof value == "object")
			console.log(value);
			//console.log("[" + value + "]");
	}
}

dynamicType.put("a");
dynamicType.change("number");
dynamicType.printType();
/*dynamicType.put(NaN);
dynamicType.change("String");
dynamicType.printType();
dynamicType.put(hello);
dynamicType.change("String");
dynamicType.printType();*/
