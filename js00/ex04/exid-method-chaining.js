const exidMethodChaining = {
	count: 40,
	up() {
		++this.count;
		return this;  // method chaining 을 위해 exidMethodChaining 객체타입을 반환한다.
	},
	down() {
		--this.count;
		return this;
	},
	showCount() {
		console.log(this.count);
		return this;
	},
};

// exidMethodChaining.up().down().up().up().down().up().down().up().up().down().showCount();
// result : 2
