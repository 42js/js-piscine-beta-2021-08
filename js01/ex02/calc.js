const getTime = () => {
    const time = document.querySelector('time');

    let today = new Date();

    let now = today.toISOString();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDay();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let meridiem = '오전';

    if (hours >= 12 && seconds > 0) {
        meridiem = '오후';
        hours -= 12;
    }

    time.datetime = now;
    time.innerHTML = `${year}. ${month}. ${day}. ${meridiem} ${hours}:${minutes}:${seconds}`;
}

getTime();

function printName() {
    const goods = document.querySelector('#name').value;
    document.querySelector('.receipt_name').innerText = `상품명 : ${goods}`;
}

function printPrice() {
    const price = Number(document.querySelector('#price').value);
    const ret = document.querySelector('.receipt_price');
    
    if (isNaN(price) == true) ret.innerText = "올바른 금액을 입력해 주세요.";
    else ret.innerText = `원가 : ${price.toLocaleString()}`;
    
}

function checkRank() {
    const member = document.querySelector('#member');

    if (member.checked) document.querySelector('#rank').disabled = false;
    else document.querySelector('#rank').disabled = true;
}

function selectRank(data) {
    const price = Number(document.querySelector('#price').value);
    const value = data.value;
    let ret = price;

    if (value == 'one') ret *= 0.95;
    else if (value == 'two') ret *= 0.9;
    else if (value == 'three') ret *= 0.85;

    if (isNaN(price) == false) document.querySelector('.receipt_discount').innerText = `할인가 : ${ret.toLocaleString()}`
    else document.querySelector('.receipt_discount').innerText = ""
}