const month = { month: 7 };
let day = 13;

const timeWarp = (newMonth, newDay) => {
    month.month = newMonth;
    day = newDay;
    console.log("month=" + month.month + ",day=" + day);
}

// timeWarp(5, 10);
// timeWarp(11, 20);
