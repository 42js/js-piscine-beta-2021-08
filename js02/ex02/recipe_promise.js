const delay = [3000, 5000, 4200, 2000, 5000];
const recipe = ['반죽 만들기', '1차 발효', '성형 하기', '2차 발효', '튀기기'];

function baking(step) {
	return new Promise(function(resolve, reject){
		console.log(recipe[step]);
		setTimeout(function(){
			if (Math.random() < 0.2) reject(step);
			else resolve(step+1)
		}, delay[step])
	})
}

function tryAgain(step)
{
	console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
	startStep(step);
}

function startStep(step) {
	if (step > 4)
	{
		console.log("꽈배기 완성!!")
		return;
	}
	baking(step).then(startStep).catch(tryAgain);
}

startStep(0);