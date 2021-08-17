lis = document.querySelectorAll("li");
elements = document.getElementsByTagName("li");

for (const li of lis) {
    li.addEventListener("click", alertMenu);
    li.addEventListener("mouseover", changeColorRed);
    li.addEventListener("mouseout", changeColorOrigin);
}

function alertMenu(event) {
    alert(`${event.target.innerHTML}을(를) 선택하셨습니다.`);
}

function changeColorRed(event) {
    event.target.style.background = "red";
    event.stopPropagation();
}
function changeColorOrigin(event) {
    event.target.style.background = "cornflowerblue";
    event.stopPropagation();
}
