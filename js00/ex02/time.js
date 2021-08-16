const month = 7 ;
let day = 13;

const timeWarp = (newMonth, newDay) => {
  month = newMonth;
  day = newDay;
}
console.log(`month = ${month}, day = ${day}`);
timeWarp(5,10);
console.log(`month = ${month}, day = ${day}`);
timeWarp(11,20);
console.log(`month = ${month}, day = ${day}`);
