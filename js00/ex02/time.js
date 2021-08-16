const month = new Date(2021, 6, 14);
let day = month.getDate();

const timeWarp = (newMonth, newDay) => {
    month.setMonth(newMonth - 1);
    month.setDate(newDay + 1);
    day = newDay;
}


// console.log(month, day);

// timeWarp(5, 10);
// console.log(month, day);

// timeWarp(11, 20);
// console.log(month, day);