const ul = document.body.children[1].children[1];
const time = document.body.children[1].children[0];

let screenSize = document.createElement("li");
let windowOuterSize = document.createElement("li");
let windowInnerSize = document.createElement("li");
let documentSize = document.createElement("li");

function setLocalTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hour <= 12) {
        return `오전 ${hour}:${min}:${sec}`;
    } else {
        return `오후 ${hour - 12}:${min}:${sec}`;
    }
}

screenSize.innerText = `Screen: ${screen.width} * ${screen.height}`;
windowOuterSize.innerText = `Window Outer: ${window.innerWidth} * ${window.innerHeight}`;
windowInnerSize.innerText = `Window Inner: ${window.outerWidth} * ${window.outerHeight}`;
documentSize.innerText = `Document: ${document.body.scrollWidth} * ${document.body.scrollHeight}`;

time.innerText = setLocalTime();
time.setAttribute("datetime", new Date().toISOString());

ul.append(screenSize);
ul.append(windowOuterSize);
ul.append(windowInnerSize);
ul.append(documentSize);
