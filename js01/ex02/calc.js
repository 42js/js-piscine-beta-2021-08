var productName = "";
var price = 0;
var discountRate = 0;
var discountAmount = 0;

const time = document.querySelector("time");
const nameField = document.querySelector("[name=product]");
const priceField = document.querySelector("[name=price]");
const memberCheck = document.querySelector("input[name=member]");
const memberLevel = document.querySelector("select[name=level]");
const labels = document.querySelectorAll("li");

nameField.addEventListener("change", (e) => {
  e.preventDefault();
  productName = nameField.value;
  changeReceipt();
});

priceField.addEventListener("change", (e) => {
  e.preventDefault();
  price = priceField.value;
  changeReceipt();
});

memberCheck.addEventListener("change", (e) => {
  e.preventDefault();
  if (memberCheck.checked) {
    memberLevel.removeAttribute("disabled");
    discountRate =
      memberLevel.options[memberLevel.options.selectedIndex].getAttribute(
        "data-percent"
      );
  } else {
    memberLevel.setAttribute("disabled", true);
    discountRate = 0;
  }
  changeReceipt();
});

memberLevel.addEventListener("change", (e) => {
  discountRate =
    e.target.options[e.target.options.selectedIndex].getAttribute(
      "data-percent"
    );
  changeReceipt();
});

const changeReceipt = () => {
  date = new Date();
  time.setAttribute("datetime", date.toISOString());
  time.innerText = `${date.getFullYear()}. ${
    date.getMonth() + 1
  }. ${date.getDate()}. ${date.getHours() > 12 ? "오후" : "오전"} ${
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
  }:${date.getMinutes()}:${date.getSeconds()}`;
  discountAmount = (price * (100 - discountRate)) / 100;
  labels[0].innerText = `상품명: ${productName}`;
  labels[1].innerText = `원가: ${price}`;
  labels[2].innerText = `할인가: ${discountAmount}`;
};

changeReceipt();
