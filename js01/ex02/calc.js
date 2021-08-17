const time = document.querySelector("time");
const product = document.getElementById("product");
const cost = document.getElementById("cost");
const isMember = document.getElementById("isMember");
const level = document.getElementById("level");
const ul = document.querySelector("ul");
time.innerText = new Date().toLocaleString("ko-KR");

const productName = document.createElement("li");
productName.innerText = "상품명: ";
ul.appendChild(productName);
const costPrice = document.createElement("li");
costPrice.innerText = "원가: ";
ul.appendChild(costPrice);
const discountPrice = document.createElement("li");
discountPrice.innerText = "할인가: ";
ul.appendChild(discountPrice);

function printdiscount(persent) {
    let discount = cost.value * persent;
    discountPrice.innerText = "할인가 :" + discount;
}

product.addEventListener("keyup", () => {
    productName.innerText = "상품명: " + product.value;
});
cost.addEventListener("keyup", () => {
    costPrice.innerText = "원가: " + cost.value;
});
cost.onkeyup = checkLevel;

isMember.onclick = function () {
    if (isMember.checked === true) {
        level.disabled = false;
        level.children[0].disabled = true;
        if (cost.value !== "") printdiscount(0.95);
    } else {
        level.disabled = true;
        level.children[0].disabled = false;
        level.children[0].selected = true;
        if (cost.value !== "") printdiscount(1);
    }
};

level.onchange = checkLevel;

function checkLevel() {
    if (cost.value !== "")
        if (level.value === "1") {
            printdiscount(0.95);
        } else if (level.value === "2") {
            printdiscount(0.9);
        } else if (level.value === "3") {
            printdiscount(0.85);
        } else {
            printdiscount(1);
        }
    else discountPrice.innerText = "할인가:";
}
