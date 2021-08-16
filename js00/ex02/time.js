const month = new Date();
let day = new Date();

console.log(month.getMonth() + 1, day.getDate());

const timeWarp = (newMonth, newDay) => {
  month.setMonth(newMonth - 1);
  day.setDate(newDay);
}

timeWarp(5, 10);
console.log(month.getMonth() + 1, day.getDate());

timeWarp(11, 20);
console.log(month.getMonth() + 1, day.getDate());