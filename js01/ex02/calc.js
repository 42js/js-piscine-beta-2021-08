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
    const productprice = document.getElementById("원가").value;
    let 체크여부 = document.getElementById("멤버쉽회원").checked;
    if (체크여부 == true){
        document.getElementById("멤버쉽등급").disabled = false
        recipeInfo.children[2].innerText = `할인가 : ${productprice * 0.95} `;
    }
    else{
        document.getElementById("멤버쉽등급").disabled = true
        recipeInfo.children[2].innerText = `할인가 : ${productprice} `;
    }
}

function 할인가격(){
    const productprice = document.getElementById("원가").value;
    const rating = document.getElementById('멤버쉽등급');
    let 등급 = rating.options[rating.selectedIndex].text;
    if (등급 == "Lv1"){
        recipeInfo.children[2].innerText = `할인가 : ${productprice * 0.95} `;
    } else if (등급 == "Lv2"){
        recipeInfo.children[2].innerText = `할인가 : ${productprice * 0.9} `;
    } else if (등급 == "Lv3"){
        recipeInfo.children[2].innerText = `할인가 : ${productprice * 0.85} `;
    }
}

showTime();