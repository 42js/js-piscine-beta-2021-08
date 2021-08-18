export function setTimer(call, interval)
{
	let count = 0;
	let timerId;
	function mainproc()
	{
		if (call(count) == false)
			clearInterval(timerId);
		count++;
	}
	timerId = setInterval(mainproc, interval);
}
