import {setTimer} from './setTimerInterval.js'

function printNum(count)
{
	console.log(count);
	return count < 3;
}
setTimer(printNum, 1000);
