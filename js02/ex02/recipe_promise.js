function randomFail() {
  if (Math.random() < 0.2)
		return "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
	return false;
}

const recipe = {
  '1.반죽 만들기': 3000,
  '2.1차 발효': 5000,
  '3.성형 하기': 4200,
	'4.2차 발효': 2000,
  '5.튀기기': 5000,
};

function cook(stage) {
	return new Promise((resolve, reject) => {
		let stageName = Object.keys(recipe)[stage];
		if (stage !== 5) {
			setTimeout(() => {
				let fail = randomFail();
				if (!fail) {
					resolve(stageName);
				}
				else {
					reject([stageName, fail]);
				}
			}, recipe[stageName]);
		}
		return;
	})
	.then((stageName) => {
		console.log(`${stageName} 성공!`);
		return cook(stage + 1);
	}).catch((result) => {
		const [ stageName, fail ] = result;
		console.log(`${stageName} ${fail}`);
		cook(stage);
	});
};

cook(0);
