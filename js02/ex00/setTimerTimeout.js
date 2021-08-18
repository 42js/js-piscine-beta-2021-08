const setTimer = (callback, sec) => {
	setTimeout(() => callQueue(callback, 0, sec), sec);
}

function callQueue (callback, count, sec) {
	if (callback(count)) {
		setTimeout(() => {
			callQueue(callback, count + 1, sec);
		}, sec);
	} else
		return;
}

export default setTimer;
