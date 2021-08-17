const time = document.querySelector(".curTime"),
    recipeInfo = document.getElementById('영수증');

const date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

function showTime(){
    time.datetime = date.toISOString();
    time.innerText = `${year}. ${month}.${day} . ${date.toLocaleTimeString()}`;
}

function 상품명보기(){
    const productName = document.getElementById("상품명").value;
    recipeInfo.children[0].innerText = `상품명 : ${productName}`;
}

function 원가(){
    const productprice = document.getElementById("원가").value;
    recipeInfo.children[1].innerText = `원가 : ${productprice}`;
}

function 멤버확인(){
    let 체크여부 = document.getElementById("멤버쉽회원").checked;
    if (체크여부 == true)
        document.getElementById("멤버쉽등급").disabled = false
    else
        document.getElementById("멤버쉽등급").disabled = true
}

function init(){
    showTime();
}

init();