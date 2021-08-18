const delay = [3000, 5000, 4200, 2000, 5000];
const recipe = ['반죽 만들기', '1차 발효', '성형 하기', '2차 발효', '튀기기'];

function baking(step) {
	if (step > 4) {
		console.log("꽈배기 완성!!");
		return;
	}
	console.log(recipe[step]);
	try{
		randomFail();
		setTimeout(baking, delay[step], step+1);
	}
	catch (err) {
		setTimeout(function(err){console.log(err);
		baking(step);}, delay[step], err);
	}
}

function randomFail() {
	if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

baking(0);