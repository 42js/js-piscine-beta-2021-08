const month = { var: 7 };
let day = 13;

const timeWarp = (newMonth, newDay) => {
  month.var = newMonth;
  day = newDay;
};

// console.log(`month: ${month.var} day: ${day}`);
// timeWarp(5, 10);
// console.log(`month: ${month.var} day: ${day}`);
// timeWarp(11, 20);
// console.log(`month: ${month.var} day: ${day}`);
