var count = 0;
export function setTimer(callback, time){
	setTimeout(function(){
		if (callback(count++))
			return setTimer(callback, time);
	}, time);
}
