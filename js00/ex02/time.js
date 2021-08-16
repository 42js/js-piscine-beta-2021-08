const month = {'month' : 7};
let day = {'day' : 13};

const timeWarp = (newMonth, newDay) => {
  if (newMonth < 1 || newDay < 1 || newMonth > 12 || newDay > 31 ||
		((newMonth == 2 || newMonth == 4 || newMonth == 6 || newMonth == 9 ||
			newMonth == 11) && newDay == 31) || (newMonth == 2 && newDay == 30))
		throw 'Not a date!';
	month.month = newMonth;
	day.day = newDay;
}

