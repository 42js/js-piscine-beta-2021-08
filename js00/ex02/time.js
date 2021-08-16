const month = new Date();
let day = month.getDate();

const timeWarp = (newMonth, newDay) => {
  if (!newMonth)
    newMonth = month.getMonth() + 1;
  if (!newDay)
    newDay = day;
  console.log(newMonth + ',' + newDay);
}
timeWarp();