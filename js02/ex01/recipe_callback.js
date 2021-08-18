function randomFail() {
	if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

function routine(){
	console.log('1.반죽 만들기 시작')
	setTimeout(course1,3000);
}

function course1(){
	try{
		console.log('1.반죽 만들기 완료');
		randomFail();
		console.log('2.1차 발효 시작')
		setTimeout(course2,5000);
	}catch(err){
		console.log(err);
		console.log('1.반죽 만들기 시작')
		setTimeout(course1,3000);
	}
}
function course2(){
	try{
		console.log('2.1차 발효 완료');
		randomFail();
		console.log('3.성형 하기 시작');
		setTimeout(course3,4200);
	}catch(err){
		console.log(err);
		console.log('2.1차 발효 시작')
		setTimeout(course2,5000);
	}
}

function course3(){
	try{
		console.log('3.성형 하기 완료');
		randomFail();
		console.log('4.2차 발효 시작');
		setTimeout(course4, 2000);
	}catch(err){
		console.log(err);
		console.log('3.성형 하기 시작');
		setTimeout(course3,4200);
	}
}
function course4(){
	try{
		console.log('4.2차 발효 완료');
		randomFail();
		console.log('5.튀기기 시작');
		setTimeout(course5, 5000);
	}catch(err){
		console.log(err);
		console.log('4.2차 발효 시작');
		setTimeout(course4,2000);
	}
}
function course5(){
	try{
		console.log('5.튀기기 완료');
		randomFail();
		console.log('1.반죽 만들기 시작');
		setTimeout(course1, 3000);
	}catch(err){
		console.log(err);
		console.log('5.튀기기 시작');
		setTimeout(course5,5000);
	}
}
routine();
