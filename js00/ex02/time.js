const month = { value : 7 };
let day = 13;

const timeWarp = (newMonth, newDay) => {
	const arr = [1, 3, 5, 7, 8, 10, 12];
	let daycount = 30;
	if (newMonth > 12 || newMonth < 1) {
		console.log("Month error!");
		return ;
	}
	else if (newDay < 1) {
		console.log("Day error!");
		return ;
	}
	if (arr.includes(newDay) == true) {
		daycount = 31;
	} else if (newDay == 2) {
		daycount = 28;
	}
	if ( newDay > daycount ) {
		console.log("Day error!");
		return ;
	} else {
		day = newDay;
	}
	month.value = newMonth;
}

timeWarp(5,10);
console.log(month.value, day);
timeWarp(11,20);
console.log(month.value, day);
timeWarp(2,31);
console.log(month.value, day);
