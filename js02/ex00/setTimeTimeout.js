export { setTimer };

let count = 0;
function setTimer(callback, interval) {

	var result = setTimeout(() => {
		if (!callback(count)) {
			clearTimeout(result);
		} else {
			count++;
			setTimer(callback, interval);
		}
	}, interval);
}

