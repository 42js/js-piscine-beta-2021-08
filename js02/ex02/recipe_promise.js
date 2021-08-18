function working(message, sec) {
	return new Promise(function(resolve, reject) {
		if (Math.random() < 0.2){
			working(message, sec);
			reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
		} else {
			console.log(`${message} 중`);
			setTimeout(() => {
				resolve(message);
			}, sec);
		}
	}).catch(console.log);
}

function fryGGuabbagi() {
	working("반죽 만들기", 3000)
	.then(result => {
		console.log(`${result} 완료!`)
		working("1차 발효", 5000)
		.then(result => {
			console.log(`${result} 완료!`)
			working("성형 하기", 4200)
			.then(result => {
				console.log(`${result} 완료!`)
				working("2차 발효", 2000)
				.then(result => {
					console.log(`${result} 완료!`)
					working("튀기기", 5000)
					.then(result => console.log(`${result} 완료!`))
				})
			})
		})
	})
}

fryGGuabbagi();