const month = {
    month : 7
};

let day = 13;


const timeWarp = (newMonth, newDay) => {
    month.month = newMonth;
    day = newDay;
}

timeWarp(5, 10);
console.log(month.month, day);
timeWarp(11, 20);
console.log(month.month, day);