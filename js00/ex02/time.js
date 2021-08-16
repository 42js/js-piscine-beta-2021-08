const month = [7];
let day = 13;

const timeWarp = (newMonth, newDay) => {
	month[0] = newMonth
	day = newDay; 
}

timeWarp(5,10);
console.log(month, day);