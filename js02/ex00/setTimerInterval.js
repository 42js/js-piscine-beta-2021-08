const setTimer = (callback, sec) => {
	let count = 0;
	const interval = setInterval(() => {
		if (!callback(count))
			clearInterval(interval);
		else
			count++;
	}, sec)
}

export default setTimer;
