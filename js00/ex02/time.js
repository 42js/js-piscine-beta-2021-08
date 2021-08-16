const month = { month: 7 };
let day = 13;

const timeWarp = (newMonth, newDay) => {
    if (0 >= newMonth || newMonth >= 12) {
        console.error('invaild month');
        return;
    }
    if (0 >= newDay || newDay >= 31) {
        console.error('Invaild Day');
        return;
    }

    day = newDay;
    month.month = newMonth;
};
