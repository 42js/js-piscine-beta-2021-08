const dynamicType = {
	lst: [],
	cur_type: "undifiend",
	already_put: false,
	put : function(n)
	{
		this.lst.push(n)
		this.already_put = true;
		cur_type = "Number";
	},
	change : function(t)
	{
		if (this.already_put == false)
		{
			console.log("'change' function is available after the use of the 'put' function.");
		}
		else
		{
			if (t == "Array" || t == "Object" || t == "Number" || t == "String")
			{
				this.cur_type = t;
			}
			else
			{
				console.log("The types you can change are 'Number', 'String', 'Object' and 'Array'.");
			}
		}
	},
	printType: function()
	{
		nbr = this.lst[this.lst.length - 1];
		var content = undefined;
		if (this.cur_type == "Number")
		{
			content = new Number(nbr);
		}
		else if (this.cur_type == "String")
		{
			content = new String(nbr);
		}
		else if (this.cur_type == "Object")
		{
			content = new Object(nbr);
		}
		else if (this.cur_type == "Array")
		{
			content = Array.from(this.lst);
			console.log("- " + content);
		}
		else
		{
			console.log("'" +cur_type + "' is not the right type.")
		}
		console.log("- " + content);
	}
}