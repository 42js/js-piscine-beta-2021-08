const month = new Date(2021, 6, 13);
let day = month.getDate();

const timeWarp = (newMonth, newDay) => {
    month.setMonth(newMonth);
    month.setDate(newDay);
    day = month.getDate();
}