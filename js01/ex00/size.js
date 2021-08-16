const time = document.body.children[1].children[0];
const date = new Date().toLocaleTimeString()
const datetime = new Date().toISOString();

time.setAttribute('datetime', datetime)
time.innerText = date;

const ul = document.body.children[1].children[1];
const screen = document.createElement('li');
screen.innerText = `Screen: ${window.screen.width} * ${window.screen.height}`;
const windowOuter = document.createElement('li');
windowOuter.innerText = `Window Outer: ${window.outerWidth} * ${window.outerHeight}`;
const windowInner = document.createElement('li');
windowInner.innerText = `Window Inner: ${window.innerWidth} * ${window.innerHeight}`;
const documentSize = document.createElement('li');
documentSize.innerText = `Document: ${document.body.clientWidth} * ${document.body.clientHeight}`;
ul.appendChild(screen);
ul.appendChild(windowOuter);
ul.appendChild(windowInner);
ul.appendChild(documentSize);
