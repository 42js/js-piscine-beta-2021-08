let resA = 0;
let resB = 0;
function routineA(){
	let temp = new Promise(function (resolve, reject){
		console.log('A.면 삶는 중');
		if(Math.random() < 0.2)
			reject("A.면 제작 실패..! 월급 삭제");
		resolve(1);
	});
	temp.then((e)=>{
		if (e){
			setTimeout(()=>{
				console.log("A.면 제작 완료.")
				resA = 999;
			}, 10000);
		}
	}).catch((text) =>{
		console.log(text);
		routineA();
	})
}
function routineB(N){
	let temp = new Promise(function(resolve, reject){
		if (N == 1){
			console.log('B1.브로콜리 대치기');
			if(Math.random() < 0.2)
				reject("B1.브로콜리 삭제. 월급 삭제");
			setTimeout(()=>{
				resolve(N);
			}, 1000);
		}
		if (N == 2){
			console.log('B2.마늘 양파 볶기');
			if(Math.random() < 0.2)
				reject("B2.마늘 양파 삭제. 월급 삭제");
			setTimeout(()=>{
				resolve(N);
			}, 2000);
		}
		if (N == 3){
			console.log('B3.배이컨 햄 볶기');
			if(Math.random() < 0.2)
				reject("B3.배이컨 햄 삭제. 월급 삭제");
			setTimeout(()=>{
				resolve(N);
			}, 2000);
		}
		if (N == 4){
			console.log('B4.소스 야채 다같이 볶기');
			if(Math.random() < 0.2)
				reject("B4.소스 야채 삭제. 월급 삭제");
			setTimeout(()=>{
				resolve(N);
			}, 3000);
		}
		if (N == 5){
			resolve(999);
		}
	})
	temp.then((N)=>{
		if (N == 999){
			console.log("B1~4.완료");
			resB = 999;
		}
		else
			routineB(N+1);
	}).catch((text)=>{
		console.log(text);
		routineB(N);
	})
}
function checkAB(){
	if (resA == 999 && resB == 999){
		let temp = new Promise(function(resolve, reject){
			console.log("C. 면까지 넣고 다 볶기");
			if(Math.random() < 0.2)
				reject("C.브로콜리 삭제. 월급 삭제");
			clearInterval(timer);
			setTimeout(()=>{
				resolve(1);
			},3000);
		})
		temp.then((e)=>{
			if (e){
				console.log('요리 끝');
			}
		}).catch((text)=>{
			console.log(text);
		})
	}

}
let timer;
function routine(){
	routineA();
	routineB(1);
	timer = setInterval(checkAB, 1);
}
routine();
