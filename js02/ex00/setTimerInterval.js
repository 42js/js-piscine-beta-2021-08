export function setTimer(cb, e){
	let count = -1;
	let timer = setInterval(() => {
		if (!cb(++count))
			clearInterval(timer);
	}, e);
}
