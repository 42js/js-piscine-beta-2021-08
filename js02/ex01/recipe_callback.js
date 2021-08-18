function randomFail() {
	if (Math.random() < 0.2) throw "제작 실패...!(월급이 삭감되었다 ㅜㅜ)";
}

// 반죽만들기
function step_0() {
	// 반죽만들기
	let result_1 = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 반죽만들기`);
			step_1();
		} catch (e) {
			console.log(e + "실패 : 반죽만들기");
			clearTimeout(result_1);
			step_0();
		}
	}, 3000);
}
// 1차 발효
function step_1() {
	// 1차 발효
	let result_2 = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 1차 발효`);
			step_2();
		} catch (e) {
			console.log(e + "실패 : 1차 발효");
			clearTimeout(result_2);
			step_1();
		}
	}, 5000);
}
// 성형하기
function step_2() {
	// 성형 하기
	result_3 = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 성형 하기`);
			step_3();

		} catch (e) {
			console.log(e + "실패 : 성형 하기");
			clearTimeout(result_3);
			step_2();
		}
	}, 4200);
}
// 2차 발효
function step_3() {
	// 2차 발효
	result_4 = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 2차 발효`);
			step_4();
		} catch (e) {
			console.log(e + " 실패 : 2차 발효");
			clearTimeout(result_4);
			step_3();
		}
	}, 2000);
}
// 튀기기
function step_4() {
	// 튀기기
	result_5 = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 튀기기`);
		} catch (e) {
			console.log(e + "실패 : 튀기기");
			clearTimeout(result_5);
			step_4();
		}
	}, 5000);
}

function cook() {
	step_0();
}

cook();
