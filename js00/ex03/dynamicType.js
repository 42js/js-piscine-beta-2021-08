const dynamicType = {
	value : null,
	printValue : null,
	putflag : 1,
	put : function(e) {
		if (this.putflag){
			this.value = e;
			this.printValue = e;
			this.putflag = 0;
		}
		else
			console.log('Only one try before printType');
	},
	change : function(e) {
		if (this.value === null)
			return ;
		if (e === 'Array')
			this.printValue = [this.value];
		if (e === 'String')
			this.printValue = `"${this.value}"`;
		if (e === 'Object')
			this.printValue = new Object(this.value);
		if (e === 'Number')
			this.printValue = this.value;
	},
	printType: function () {
		console.log(this.printValue);
		this.putflag = 1;
	}
}
const Type = dynamicType;
Type.change("Object");
Type.put(42);
Type.put(3);
Type.printType();
Type.printType();
Type.change("String");
Type.printType();
