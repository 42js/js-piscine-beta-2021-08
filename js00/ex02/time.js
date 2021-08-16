const month = { val: 7 };
let day = 13;

const timeWarp = (newMonth, newDay) => {
  month.val = newMonth;
  day = newDay;
};

// console.log(`month: ${month.val} day: ${day}`);
// timeWarp(5, 10);
// console.log(`month: ${month.val} day: ${day}`);
// timeWarp(11, 20);
// console.log(`month: ${month.val} day: ${day}`);
