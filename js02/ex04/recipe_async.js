function randomFail() {
  if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

const recipe = {
  '1.반죽 만들기': 3000,
  '2.1차 발효': 5000,
  '3.성형 하기': 4200,
	'4.2차 발효': 2000,
  '5.튀기기': 5000,
};

async function cook(stage) {
	return await new Promise(() => {
		let stageName = Object.keys(recipe)[stage];
		if (stage !== 5) {
			setTimeout(() => {
				try {
					randomFail();
					console.log(`${stageName} 성공!`);
					return cook(stage + 1);
				}
				catch (e) {
					console.log(`${stageName} ${e}`);
					return cook(stage);
				}
			}, recipe[stageName]);
		}
		return;
	})
};

cook(0);
