function getClassType(obj)
{
	return Object.prototype.toString.call(obj).slice(8, -1);
}

const dynamicType = {
	data : 0,
	put :	function(input)
			{
				data = input;
			},
	change :function(input)
			{
				if (input ==  "String")
				{
					if (typeof data == "object")
						data = String(data['0']);
					else
						data = String(data);
				}
				else if (input == "Number")
				{
					if (typeof data == "object")
						data = Number(data['0']);
					else
						data = Number(data);
				}
				else if (input == "Array")
				{
					if (typeof data == "object")
						data = [data['0']];
					else
						data = [data];
				}
				else if (input == "Object")
				{
					if (typeof data == "object")
						data = {'0' : data['0']};
					else
						data = {'0' : data};
				}
			},
	printType :function() 
			   { 
					if (getClassType(data) == "Array")
					{
						console.log("Array");
						if (typeof data['0'] == "string")
							console.log("-", "[\"" + data['0'] + "\"]");
						else if (typeof data['0'] == "number")
							console.log("-", "[" + data['0'] + "]");

					}
					else if (getClassType(data) == "Object")
					{
						console.log("Object");
						if (typeof data['0'] == "string")
							console.log("-", "{\"0\":\"" + data['0'] + "\"}");
						else if (typeof data['0'] == "number")
							console.log("-", "{\"0\":" + data['0'] + "}");

					}
					else if (getClassType(data) == "String")
					{
						console.log("String");
						console.log("-", "\"" + data + "\"");
					}
					else if (getClassType(data) == "Number")
					{
						console.log("Number");
						console.log("-", data);
					}
				}
};
