export function setTimer(callback, interval) {
	let count = 0;
	function checkInterval(callback){
		if (!callback(count))
		{
			clearInterval(this)
		}
		count++;
	}
	setInterval(checkInterval, interval, callback);
}