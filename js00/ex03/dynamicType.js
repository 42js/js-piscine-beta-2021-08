const dynamicType = {
    
    put : function (num)
		return num;

	change : function (val)
	{
		var tmp;
		
		if (val == "Number")
			tmp = Number(tmp);
		if (val == "String")
			tmp = String(tmp);
		if (val == "Object")
		{
			tmp = new Object();
			tmp.num = tmp;
		}
		if (val == "Array")
		{
			var arr = new Array();
			arr[0] = tmp;
			tmp = arr;
		}
	}
	
	printType : function () 
		console.log(tmp);
}

var type;

type.put(42);
type.change("String");
type.printType();
