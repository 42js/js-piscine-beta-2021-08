// tag select
const time = document.body.children[1].children[0];
const ul = document.body.children[1].children[1];

// time
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const sec = date.getSeconds();

if (hour < 12 && hour >= 0) 
	time.innerHTML = `오전 ${hour}:${minute}:${sec}`;
else
	time.innerHTML = `오후 ${hour - 12}:${minute}:${sec}`;

// list
ul.innerHTML += `<li>Screen: ${window.screen.width} * ${window.screen.height}</li>`;
ul.innerHTML += `<li>Window Outer: ${window.outerWidth} * ${window.outerHeight}</li>`;
ul.innerHTML += `<li>Window Inner: ${window.innerWidth} * ${window.innerHeight}</li>`;
ul.innerHTML += `<li>Document: ${document.documentElement.clientWidth} * ${document.documentElement.clientHeight}</li>`;