//import { setTimer } from './setTimerTimeout.js'
import { setTimer } from './setTimerInterval.js'

function printNum(count) {
	console.log(count);
	return count < 3;
}


setTimer(printNum, 1000);
// function square(x, callback) { 
//     setTimeout(callback, 100, x*x); 
// } 
// square(2, function(number) { 
//     console.log(number); 
// });