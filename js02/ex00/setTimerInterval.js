export function setTimer(callback, interval){
	let count = 0;

	let timerId = setInterval(function(){
		if (callback(count) === false){
			clearInterval(timerId);
		}
		++count;
	}, interval);

}
