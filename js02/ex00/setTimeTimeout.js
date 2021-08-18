export {setTimer};

// export default function setTimer(callback, interval) {
function setTimer(callback, interval) {
	let count = 0;
	// promise 가 있어야하나봄...
	// 아니면 setTimeout 의 인자 callback 함수의 return 값을 알수 있지않을까?
	var result = setTimeout(callback, interval, count);
	console.log(bool);
}

