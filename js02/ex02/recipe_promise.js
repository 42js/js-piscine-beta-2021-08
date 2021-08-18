/*
// 1. Producer

// when new promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
	// doing some heavy work (network, read files)
	console.log(`start fucking promise`);  // 잘 찍힘
	setTimeout(() => {
		// resolve(`mykang`);
		reject(new Error(`no network`));
	}, 2000);
});

console.log(promise);  // { <pending> }


// 2. Consumer : then, catch, finally

promise
	.then(value => {
		console.log(value);
	})
	.catch(error => {
		console.log(error);
	})
	.finally(() => {
		console.log(`fucking promise is done finally`);
	});
*/

function randomFail() {
	if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

// 반죽만들기
// let step_0 = new Promise((resolve, reject) => {
function step_0() {
	new Promise((resolve, reject) => {
		// 반죽만들기 3초
		let result = setTimeout(() => {
			try {
				randomFail();
				resolve("성공 : 반죽만들기");
			} catch (e) {
				clearTimeout(result);
				console.log(e);
				reject(new Error("실패 : 반죽만들기"));
			}
		}, 3000);
	})
		.then(value => {
			console.log(value);
			step_1();
		})
		.catch(error => {
			console.log(error);
			step_0();
		});
}

// 1차 발효
// let step_1 = new Promise((resolve, reject) => {
function step_1() {
	new Promise((resolve, reject) => {
		// 1차 발효 5초
		let result = setTimeout(() => {
			try {
				randomFail();
				resolve("성공 : 1차 발효");
			} catch (e) {
				clearTimeout(result);
				console.log(e);
				reject(new Error("실패 : 1차 발효"));
			}
		}, 5000);
	})
		.then(value => {
			console.log(value);
			step_2();
		})
		.catch(error => {
			console.log(error);
			step_1();
		});
}

// 성형 하기
// let step_2 = new Promise((resolve, reject) => {
function step_2() {
	new Promise((resolve, reject) => {
		let result = setTimeout(() => {
			try {
				randomFail();
				resolve("성공 : 성형 하기");
			} catch (e) {
				clearTimeout(result);
				console.log(e);
				reject(new Error("실패: 성형 하기"));
			}
		}, 4200);
	})
		.then(value => {
			console.log(value);
			step_3();
		})
		.catch(error => {
			console.log(error);
			step_2();
		});
}

// 2차 발효
// let step_3 = new Promise((resolve, reject) => {
function step_3() {
	new Promise((resolve, reject) => {
		let result = setTimeout(() => {
			try {
				randomFail();
				resolve("성공 : 2차 발효");
			} catch (e) {
				clearTimeout(result);
				console.log(e);
				reject(new Error("실패: 2차 발효"));
			}
		}, 2000);
	})
		.then(value => {
			console.log(value);
			step_4();
		})
		.catch(error => {
			console.log(error);
			step_3();
		});
}

// 튀기기
// let step_4 = new Promise((resolve, reject) => {
function step_4(){
	new Promise((resolve, reject) => {
		let result = setTimeout(() => {
			try {
				randomFail();
				resolve("성공 : 튀기기");
			} catch (e) {
				clearTimeout(result);
				console.log(e);
				reject(new Error("실패: 튀기기"));
			}
		}, 5000);
	})
	.then(value => {
		console.log(value);
	})
	.catch(error => {
		console.log(error);
		step_4();
	});
}

step_0();
/*
step_0
	.then(value => console.log(value))
	.catch(error => console.log(error));
step_1
	.then(value => console.log(value))
	.catch(error => console.log(error));
step_2
	.then(value => console.log(value))
	.catch(error => console.log(error));
step_3
	.then(value => console.log(value))
	.catch(error => console.log(error));
step_4
	.then(value => console.log(value))
	.catch(error => console.log(error));
*/
