export function setTimer(func, interval)
{
	let count = 0;
	setTimeout(mainproc, interval, func, interval, count);
}

function mainproc(func, interval, count)
{
	if (func(count) == false)
		return ;
	count++;
	setTimeout(mainproc, interval, func, interval, count);
}
