export {setTimer};

function setTimer(callback, interval) {
	let count = 0;
	let result = setInterval(callback, interval, count);
	console.log(result);
}

/*
// promise 적용
function setTimer(callback, interval) {
	let count = 0;
	return new Promise(function(resolve, reject) {
		setInterval(callback, interval, count);
		++count;
	});
}
*/
