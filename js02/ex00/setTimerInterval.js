var count = 0;

export function setTimer(callback, time){
	let interval = setInterval(function(){
		if (!callback(count++))
			return clearInterval(interval);
	}, time);
}
