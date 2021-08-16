const month = /* TODO */[];
let day = /* TODO */ 13;

const timeWarp = (newMonth, newDay) => {
	// TODO
	if (newMonth > 0 && newMonth < 13)
		month[0] = newMonth;
	if (newDay > 0 && newDay < 32)
		day = newDay;
}
