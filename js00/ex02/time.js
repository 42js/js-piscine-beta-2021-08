const month = {value : 7};//객체를 가리키는 메모리주소만 변경불가
let day = 13;

const timeWarp = (newMonth, newDay) => {
    month.value = newMonth
    day = newDay;
}

timeWarp(5, 10)
console.log(month.value, day);
timeWarp(11, 20);
console.log(month.value, day);