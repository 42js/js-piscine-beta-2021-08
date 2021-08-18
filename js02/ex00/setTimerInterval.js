export function setTimer(callback, interval){
	let count = 0;

	const intervalId = setInterval(() => {
		let ret = callback(count);
		if (!ret)
			clearInterval(intervalId);
		count++;
	}, interval);
}
