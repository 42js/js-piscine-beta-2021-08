const month = {month : 7};
let day = 13;

const timeWarp = (newMonth, newDay) => {
	day = newDay;
	month.month = newMonth;
}

// timeWarp(5, 10);
// console.log(`month=${month.month}, day=${day}`);
// timeWarp(11, 20);
// console.log(`month=${month.month}, day=${day}`);


