export function setTimer(callback, interval){
	let count = 0;

	function recursive(){
		const timeoutId = setTimeout(() => {
			let ret = callback(count);
			if (!ret)
				clearTimeout(timeoutId);
			else
				recursive();
			count++;
		}, interval);
	}

	recursive();
}
