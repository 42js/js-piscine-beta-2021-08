let time = new Date();
let AmPm = time.getHours() >= 12? '오후' : '오전';
let hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
let minutes = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes();
let seconds = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds();

const timeEl = document.body.children[1].children[0];
timeEl.setAttribute('datetime', time);
timeEl.innerHTML = `${AmPm} ${hours}:${minutes}:${seconds}`;


const ulEl = document.body.children[1].children[1];

let liFirst = document.createElement("li");
liFirst.innerHTML = `<li>Screen: ${screen.width} * ${screen.height}</li>`;
ulEl.appendChild(liFirst);

let liSec = document.createElement("li");
liSec.innerHTML = `Window Outer: ${window.outerWidth} * ${window.outerHeight}`
ulEl.appendChild(liSec);

let liThir = document.createElement("li");
liThir.innerHTML = `Window Inner: ${window.innerWidth} * ${window.innerHeight}`
ulEl.appendChild(liThir);

let liFor = document.createElement("li");
liFor.innerHTML = `Document: ${document.body.scrollWidth} * ${document.body.scrollHeight}`
ulEl.appendChild(liFor);
