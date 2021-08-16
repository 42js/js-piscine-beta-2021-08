const month = new Date(2021, 7, 13);
let day = month.getDate();

const timeWarp = (newMonth, newDay) => {
  if (Number.isNaN(newMonth) || Number.isNaN(newDay))
    throw new Error(
      'Error (timeWarp): invalid value given (paramer must be numberical value)'
    );
  else if (!(newMonth >= 1 && newMonth <= 12))
    throw new Error(
      'Error (timeWarp): invalid value given (month must be between 1 and 12)'
    );
  else if (!(newDay >= 1 && newDay <= 31))
    throw new Error(
      'Error (timeWarp): invalid value given (month must be between 1 and 12)'
    );
  if (newMonth === 2 && newDay > 28)
    throw new Error('Error (timeWarp): invalid value given (you better know))');
  month.setMonth(newMonth);
  month.setDate(newDay);
  day = month.getDate();
};

// console.log(month.getMonth(), day);
// timeWarp(5, 10);
// console.log(month.getMonth(), day);
// timeWarp(11, 20);
// console.log(month.getMonth(), day);
