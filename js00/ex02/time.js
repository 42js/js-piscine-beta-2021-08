const month = { val: 7 };
let day = 13;

const timeWarp = (newMonth, newDay) => {
  const date = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (typeof newMonth !== 'number' || typeof newDay !== 'number') {
    console.log('Please enter the type as number.');
  } else if (month.val === newMonth && day === newDay) {
    console.log(`It's today! ${newMonth}/${newDay}.`);
  } else if (!(newMonth >= 1 && newMonth <= 12)) {
    console.log(`Invalid month! You insert ${newMonth} month.`);
  } else if (!(newDay >= 1 && newDay <= date[newMonth - 1])) {
    console.log(`Invalid day! You insert ${newDay} day.`);
  } else {
    month.val = newMonth;
    day = newDay;
  }
};

console.log(`month: ${month.val} day: ${day}`);
timeWarp(5, 10);
console.log(`month: ${month.val} day: ${day}`);
timeWarp(11, 20);
console.log(`month: ${month.val} day: ${day}`);

timeWarp('1', '15');
console.log(`month: ${month.val} day: ${day}`);
timeWarp(11, 20);
console.log(`month: ${month.val} day: ${day}`);
timeWarp(100, 100);
console.log(`month: ${month.val} day: ${day}`);
timeWarp(20, 10);
console.log(`month: ${month.val} day: ${day}`);
timeWarp(2, 50);
console.log(`month: ${month.val} day: ${day}`);
