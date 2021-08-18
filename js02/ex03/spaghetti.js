function randomFail() {
  if (Math.random() < 0.2)
		return "실패..!(월급이 삭감되었다 ㅜㅜ)";
	return false;
}

const recipe = {
	'A.면 삶기': 10000,
	'B1.브로콜리 데치기': 1000,
	'B2.마늘과 양파 볶기': 2000,
	'B3.베이컨과 햄 볶기': 2000,
	'B4.소스, 남은 야채 넣고 다같이 볶기': 3000,
	'C.면까지 넣고 다 같이 볶기': 3000,
};

function timeout(resolve, reject, stageName){
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

function cook(i, stage){
	return new Promise((resolve, reject) => {
		let stageName = Object.keys(recipe)[i];
		if (stage === 'A' && i === 0) {
			timeout(resolve, reject, stageName);
		}
		else if (stage === 'B' && i < 5) {
			timeout(resolve, reject, stageName);
		}
		else if (stage === 'C' && i === 5) {
			timeout(resolve, reject, stageName);
		}
		else
			return resolve(stageName);
	})
	.then((stageName) => {
		if ((stage === 'A' && i === 1) ||
			(stage === 'B' && i === 5) ||
			(stage === 'C' && i === 6))
			return Promise.resolve(stageName);
		else {
			console.log(`${stageName} 성공!`);
			return cook(i + 1, stage);
		};
	}).catch((result) => {
		const [ stageName, fail ] = result;
		console.log(`${stageName} ${fail}`);
		return cook(i, stage);
	});
}

Promise.all([cook(0, 'A'), cook(1, 'B')])
	.then(() => {
		cook(5, 'C');
	})
