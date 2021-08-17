function getTime() {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  if (month >= 0 && month <= 9) month = `0${month}`;
  if (date >= 0 && date <= 9) date = `0${month}`;
  if (hour >= 0 && hour <= 9) hour = `0${hour}`;
  if (min >= 0 && min <= 9) min = `0${min}`;
  if (sec >= 0 && sec <= 9) sec = `0${min}`;
  return `${year}-${month}-${date} ${hour}:${min}:${sec}`;
}

function setInnerHtmlTime(str) {
  let ampm = '오전';
  const dateAndTime = str.split(' ');
  const dateval = dateAndTime[0].split('-');
  const timeval = dateAndTime[1].split(':');

  if (timeval[0] > 12) {
    ampm = '오후';
    timeval[0] -= 12;
  }

  return `${dateval[0]}. ${dateval[1]}. ${dateval[2]}. ${ampm} ${timeval[0]}:${timeval[1]}:${timeval[2]}`;
}
let originalPrice = 0;

function isMembership(box) {
  // const isMembership = document.getElementsByName('isMembership');
  if (box.checked)
    document.getElementById('membershipDropdown').disabled = false;
  else document.getElementById('membershipDropdown').disabled = true;
}

function updateProductName(input) {
  const productNameOutput = document.getElementById('productNameOutput');
  productNameOutput.innerText = input.value;
  // productName = input.value;
}

function numberWithCommas(x) {
  if (x === '') return '';
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateOriginPrice(input) {
  const originPriceOutput = document.getElementById('originPriceOutput');
  originalPrice = Number(input.value);
  if (Number.isNaN(originalPrice)) originPriceOutput.innerText = 'wrong input!';
  else originPriceOutput.innerText = numberWithCommas(originalPrice);
}

function updateDiscountPrice(input) {
  const discountPriceOutput = document.getElementById('discountPriceOutput');
  if (Number.isNaN(originalPrice)) {
    discountPriceOutput.innerText = 'wrong input!';
    return;
  }
  let discountPrice = originalPrice;
  if (
    input.options[input.selectedIndex].getAttribute('data-percent') === 'five'
  )
    discountPrice = Math.floor((discountPrice / 100) * 95);
  else if (
    input.options[input.selectedIndex].getAttribute('data-percent') === 'ten'
  )
    discountPrice = Math.floor((discountPrice / 100) * 90);
  else if (
    input.options[input.selectedIndex].getAttribute('data-percent') ===
    'fifteen'
  )
    discountPrice = Math.floor((discountPrice / 100) * 85);
  else discountPrice = 'check membership level!';

  if (Number.isNaN(discountPrice))
    discountPriceOutput.innerHTML = discountPrice;
  else discountPriceOutput.innerHTML = numberWithCommas(discountPrice);
}

window.onload = function setTime() {
  const time = document.getElementsByTagName('time');
  time[0].setAttribute('datetime', getTime());
  time[0].innerHTML = setInnerHtmlTime(time[0].getAttribute('datetime'));
  setInterval(() => {
    time[0].setAttribute('datetime', getTime());
    time[0].innerHTML = setInnerHtmlTime(time[0].getAttribute('datetime'));
  }, 1000);
};
