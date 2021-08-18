function randomFail() {
	// if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
	if (Math.random() < 0.2)
		return false;
	return true;
}

// 면 삶기 10초
function step_A() {
	console.log("A");
	new Promise((resolve, reject) => {
		let result = setTimeout(() => {
			if (randomFail()) {
				resolve("성공 : A");
			} else {
				clearTimeout(result);
				reject(new Error("실패 : A"));
			}
		}, 10000);
	})
		.then(value => {
			console.log(value);
			return true;
		})
		.catch(error => {
			console.log(error);
			step_A();
		});
}

// 브로콜리 대치기 1초
function step_B1() {
	console.log("B1");
	new Promise((resolve, reject) => {
		let result = setTimeout(() => {
			if (randomFail()) {
				resolve("성공 : B1");
			} else {
				clearTimeout(result);
				reject(new Error("실패 : B1"));
			}
		}, 1000);
	})
		.then(value => {
			console.log(value);
			step_B2();
		})
		.catch(error => {
			console.log(error);
			step_B1();
		});
}

// 마늘과 양파 볶기 2초
function step_B2() {
	console.log("B2");
	new Promise((resolve, reject) => {
		let result = setTimeout(() => {
			if (randomFail()) {
				resolve("성공 : B2");
			} else {
				clearTimeout(result);
				reject(new Error("실패 : B2"));
			}
		}, 2000);
	})
		.then(value => {
			console.log(value);
			step_B3();
		})
		.catch(error => {
			console.log(error);
			step_B2();
		});
}

// 베이컨과 햄 볶기 2초
function step_B3() {
	console.log("B3");
	new Promise((resolve, reject) => {
		let result = setTimeout(() => {
			if (randomFail()) {
				resolve("성공 : B3");
			} else {
				clearTimeout(result);
				reject(new Error("실패 : B3"));
			}
		}, 2000);
	})
		.then(value => {
			console.log(value);
			step_B4();
		})
		.catch(error => {
			console.log(error);
			step_B3();
		})
}

// 소스, 남은 야채 넣고 다같이 볶기 3초
function step_B4() {
	console.log("B4");
	new Promise((resolve, reject) => {
		let result = setTimeout(() => {
			if (randomFail()) {
				resolve("성공 : B4");
			} else {
				clearTimeout(result);
				reject(new Error("실패 : B4"));
			}
		}, 3000);
	})
		.then(value => {
			console.log(value);
			return true;
		})
		.catch(error => {
			console.log(error);
			step_B4();
		});
}

// 면까지 넣고 다 같이 볶기 3초
function step_C() {
	console.log("C");
}

function step_B_All() {
	step_B1();
	step_B2();
	step_B3();
	return step_B4();
}

function cook() {
	const result_a = step_A();
	const result_b = step_B_All();

	// 성공시!
	while (1) {
		if (result_a && result_b) {
			step_C();
			// breaking point 는 어캐함?!
			break;
		}
	}
	console.log("finish fucking spaghetti!!!");
}

cook();
