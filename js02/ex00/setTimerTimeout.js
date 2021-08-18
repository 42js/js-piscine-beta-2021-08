export function setTimer(callback, interval) {
	let count = 0;
	setTimeout(refCallBack, interval, callback, count, interval);
}

function refCallBack(callback, count, interval){
	if (callback(count))
	{
		count++;
		setTimeout(refCallBack, interval, callback, count, interval);
	}
}