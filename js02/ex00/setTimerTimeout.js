let count = -1;
export function setTimer(cb, e){
	setTimeout(() => {
		if(cb(++count))
			setTimer(cb, e);
	}, e);
}
