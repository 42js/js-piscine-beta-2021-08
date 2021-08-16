const time = document.body.children[1].children[0];
const ul = document.body.children[1].children[1];

let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let meridiem = '오전';

if (hours >= 12 && seconds > 0) {
    meridiem = '오후';
    hours -= 12;
}

time.datetime = today;
time.innerHTML = `${meridiem} ${hours}:${minutes}:${seconds}`;

for (var i = 0; i < 4; i++) {
    const li = document.createElement('li');
    ul.append(li);

}

ul.children[0].innerHTML = `Screen: ${screen.width} * ${screen.height}`;
ul.children[1].innerHTML = `Window Outer: ${window.outerWidth} * ${window.outerHeight}`;
ul.children[2].innerHTML = `Window Inner: ${window.innerWidth} * ${window.innerHeight}`;
ul.children[3].innerHTML = `Document: ${document.documentElement.offsetWidth} * ${document.documentElement.offsetHeight}`;