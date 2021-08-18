export {setTimer};

function setTimer(func, interval) {
	let count = 0;

	/*
	function repeat(callback, count) {
		if (!callback(count))
			clearInterval()
		++count;

	}
	*/
	let result = setInterval(function(){
		if (!func(count))
			clearInterval(result);
		++count;
	}, interval);
}
