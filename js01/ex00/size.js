/* eslint no-restricted-globals: ["off"] */

const currentTime = new Date();
const datetime = currentTime.toLocaleTimeString('ko-ko');
// const time = document.body.firstElementChild.nextElementSibling.firstChild;
// const time = document.getElementsByTagName('time');
const time = document.body.children[1].children[0];
time.setAttribute('datetime', 'ISO');
time.innerHTML = datetime;
console.log(time);

const ul = time.nextElementSibling;
const li1 = document.createElement('li');
li1.append(`Screen: ${screen.width} * ${screen.height}`);
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.append(`Window Outer: ${window.outerWidth} * ${window.outerHeight}`);
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.append(`Window Inner: ${window.innerWidth} * ${window.innerHeight}`);
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.append(`Document: ${document.body.clientWidth} * ${document.body.clientHeight}`);
ul.appendChild(li4);
