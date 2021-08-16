const month = {
    mon : 7,
};
let day = 13;

const timeWarp = (newM, newD) => {
    month.mon = newM;
    day = newD;
}

console.log(`month : ${month.mon}, day : ${day}`);

timeWarp(5, 10);

console.log(`month : ${month.mon}, day : ${day}`);

timeWarp(11, 20);

console.log(`month : ${month.mon}, day : ${day}`);