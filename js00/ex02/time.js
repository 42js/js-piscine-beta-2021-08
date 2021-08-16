const month = new Date(2021, 6, 13);
let day = month.getDate();

console.log(month, day);

const timeWarp = (newMonth, newDay) => {
	month.setMonth(newMonth - 1);
	month.setDate(newDay);
	day = month.getDate();
}

console.log(month.getMonth(), day);
timeWarp(5, 10);
console.log(month.getMonth(), day);
timeWarp(11, 20);
console.log(month.getMonth(), day);
