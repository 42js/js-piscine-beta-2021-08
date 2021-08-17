function getTime() {
  const clock = document.getElementById("clock");
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth();
  const dd = date.getDate();
  const minutes = date.getMinutes();
  let hours = date.getHours();
  const seconds = date.getSeconds();
  let XX;

  if (hours >= 12) {
    XX = "오후";
    hours -= 12;
  } else XX = "오전";
  clock.setAttribute("datetime", `${date.toISOString()}`);
  clock.textContent = `${yyyy}.${mm}.${dd} ${XX} ${hours}:${minutes}:${seconds}`;
}

const membership = document.getElementById("membership");
const memSelect = document.getElementById("membership-select");

membership.addEventListener("change", () => {
  printDiscountPrice();
  if (membership.checked) memSelect.removeAttribute("disabled");
  else memSelect.setAttribute("disabled", "");
});

function printProductName() {
  let product = document.getElementById("productName").value;
  document.getElementsByTagName("li")[0].textContent = `상품명: ${product}`;
}

let price = null;

function printPrice() {
  price = document.getElementById("price").value;
  document.getElementsByTagName("li")[1].textContent = `원가: ${parseInt(
    price
  ).toLocaleString()}`;
}

function printDiscountPrice() {
  let discountPrice = price;
  if (!membership.checked);
  else discountPrice = (price * (100 - memSelect.value * 5)) / 100;
  document.getElementsByTagName("li")[2].textContent = `할인가: ${parseInt(
    discountPrice
  ).toLocaleString()}`;
}

function init() {
  getTime();
}

init();
