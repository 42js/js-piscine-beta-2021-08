let count = 0;

export function setTimer(callback, interval){
	setTimeout(function(){	// 함수명(함수, 숫자);
		if (callback(count))
		{
			++count;
			setTimer(callback, interval);
		}
	}, interval);
}
