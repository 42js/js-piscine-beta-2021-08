function randomFail() {
	if (Math.random() < 0.2)
		throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

function step5() {
	console.log(`튀기기 중...`);
	setTimeout(() => {
		try {
			randomFail();
			console.log(`튀기기 완료!`);
		} catch (err) {
			console.log(err);
			step5();
		}
	}, 5000);
}

function step4() {
	console.log(`2차 발효 중...`);
	setTimeout(() => {
		try {
			randomFail();
			console.log(`2차 발효 완료!`);
			step5();
		} catch (err) {
			console.log(err);
			step4();
		}
	}, 2000);
}

function step3() {
	console.log(`성형 하기 중...`);
	setTimeout(() => {
		try {
			randomFail();
			console.log(`성형 하기 완료!`);
			step4();
		} catch (err) {
			console.log(err);
			step3();
		}
	}, 4200);
}

function step2() {
	console.log(`1차 발효 중...`);
	setTimeout(() => {
		try {
			randomFail();
			console.log(`1차 발효 완료!`);
			step3();
		} catch (err) {
			console.log(err);
			step2();
		}
	}, 5000);
}

function step1() {
	console.log(`반죽 만들기 중...`);
	setTimeout(() => {
		try {
			randomFail();
			console.log(`반죽 만들기 완료!`);
			step2();
		} catch (err) {
			console.log(err);
			step1();
		}
	}, 3000);
}

function fryGGuabbagi() {
	step1();
}

fryGGuabbagi();