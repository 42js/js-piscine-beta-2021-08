let productname =  '';
let productprice = NaN;
let ismember = false;

function printProductName() {
    var product = document.querySelector("#product").value;
    document.getElementsByTagName("li")[0].innerHTML = "상품명: " + product;
    productname = product;
};

function printProductPrice() {
    var price = document.querySelector("#price").value;
    if (isNaN(Number(price)))
        alert("상품의 가격은 숫자여야 합니다.");
    else {
        document.getElementsByTagName("li")[1].innerHTML = "원가: " + Number(price).toLocaleString("ko-KR");
        productprice = Number(price);
    }
};

function isMember() {
    ismember = document.querySelector("#member").checked;
};

function setMembership(param) {
    if (ismember === true) {
        if (!isNaN(productprice)) {
            var discount = productprice * (1 - Number(param.value) * 0.05);
            document.getElementsByTagName("li")[2].innerHTML = "할인가: " + discount.toLocaleString("ko-KR");
        }
        else
            alert("상품의 가격을 먼저 입력해주세요.")
    }
    else
        alert("멤버십 회원이 아니신 경우 등급을 선택하실 수 없습니다.");
}