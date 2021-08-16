const timeArea = document.body.children[1].firstElementChild;

let currentDatetime = new Date().toISOString();
let currentHours = new Date().getHours();
let currentMinutes = new Date().getMinutes();
let currentSeconds = new Date().getSeconds();

if (currentHours > 12) 
    currentHours = `오후 ${currentHours - 12}`
else
    currentHours = `오전 ${currentHours}`;

timeArea.dateTime = currentDatetime;
timeArea.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`;

const sizeArea = document.body.children[1].lastElementChild;

const sizeArray = [];

for (let i = 0; i < 4; i++) {
    let newChild = document.createElement('li');
    sizeArray[i] = newChild;
}

sizeArray[0].innerHTML = `Screen: ${window.screen.width} * ${window.screen.height}`;

sizeArray[1].innerHTML = `Window Outer: ${window.outerWidth} * ${window.outerHeight}`;

sizeArray[2].innerHTML = `Window Inner: ${window.innerWidth} * ${window.innerHeight}`;

sizeArray[3].innerHTML = `Document: ${document.documentElement.scrollWidth} * ${document.documentElement.scrollHeight}`;

for (let i = 0; i < 4; i++) {
    sizeArea.appendChild(sizeArray[i]);
}