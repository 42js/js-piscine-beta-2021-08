import {setTimer} from './setTimerTimeout.js';

function printNum(count)
{
	console.log(count);
	return (count < 3);
}
setTimer(printNum, 0);
