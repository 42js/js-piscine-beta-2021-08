const dynamicType = {
	flag : 0,
	save : 0,
	number : 0,
	string : "",
	object : {},
	array : [],
	type : "",
    put : function(arg){
		if (!arg && arg !== 0) {
			console.log("wrong input");
			return ;
		}
		this.save = Number(arg);
		this.flag = 1;
	},
    change : function(arg){
		if (!this.flag) {
			console.log("do first put");
			return;
		}
		this.type = arg;
		if (this.type == 'Number')
			this.number = this.save;
		else if (this.type == 'String')
			this.string = String(this.save);
		else if (this.type == 'Object')
			this.object = new Object(this.save);
		else if (this.type == 'Array')
			this.array = String(this.save).split();
		else
			console.log("wrong type");
	},

    printType : function(){
		if (this.type == 'Number')
			console.log(this.number);
		else if (this.type == 'String')
			console.log(this.string);
		else if (this.type == 'Object')
			console.log(this.object);
		else if (this.type == 'Array')
			console.log(this.array);
		else
			console.log("not enough process");
	}
}