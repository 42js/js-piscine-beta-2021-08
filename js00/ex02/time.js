const month = {value : 7};
let day = 13;

const timeWarp = (newMonth, newDay) => {
	month.value = newMonth;
	day = newDay;
}

timeWarp(5, 10);
console.log(month);
console.log(day);
