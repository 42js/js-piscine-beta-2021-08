function randomFail() {
	if (Math.random() < 0.2) throw "제작 실패...!(월급이 삭감되었다 ㅜㅜ)";
}

function cook() {
	// 반죽만들기
	let result = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 반죽만들기`);

			// 1차 발효
			let result_2 = setTimeout(() => {
				try {
					randomFail();
					console.log(`성공 : 1차 발효`);

					// 성형 하기
					result_3 = setTimeout(() => {
						try {
							randomFail();
							console.log(`성공 : 성형 하기`);

							// 2차 발효
							result_4 = setTimeout(() => {
								try {
									randomFail();
									console.log(`성공 : 2차 발효`);

									// 튀기기
									result_5 = setTimeout(() => {
										try {
											randomFail();
											console.log(`성공 : 튀기기`);
										} catch (e) {
											console.log(e);
											clearTimeout(result_5);
										}
									}, 5000);

								} catch (e) {
									console.log(e);
									clearTimeout(result_4);
								}
							}, 2000);

						} catch (e) {
							console.log(e);
							clearTimeout(result_3);
						}
					}, 4200);

				} catch (e) {
					console.log(e);
					clearTimeout(result_2);
				}
			}, 5000);
		} catch (e) {
			console.log(e);
			clearTimeout(result);
		}
	}, 3000);
	/*
	// 반죽만들기
	let result = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 반죽만들기`);
		} catch (e) {
			console.log(e);
			clearTimeout(result);
		}
	}, 3000);
	// 1차 발효
	result = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 1차 발효`);
		} catch (e) {
			console.log(e);
			clearTimeout(result);
		}
	}, 5000);
	// 성형 하기
	result = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 성형 하기`);
		} catch (e) {
			console.log(e);
			clearTimeout(result);
		}
	}, 4200);
	// 2차 발효
	result = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 2차 발효`);
		} catch (e) {
			console.log(e);
			clearTimeout(result);
		}
	}, 2000);
	// 튀기기
	result = setTimeout(() => {
		try {
			randomFail();
			console.log(`성공 : 튀기기`);
		} catch (e) {
			console.log(e);
			clearTimeout(result);
		}
	}, 5000);
	*/
}

cook();
