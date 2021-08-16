const exid = {
	count: 40,
	up(){
		this.count += 1;
	},
	down(){
		this.count -= 1;
	},
	showCount(){
		console.log(this.count);
	}
}