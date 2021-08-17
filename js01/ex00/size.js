let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
let flag = "오전";
if (hour > 12) {
	flag = "오후";
	if (hour != 12)
		hour -= 12;
}
document.body.children[1].children[0].datetime = time;
document.body.children[1].children[0].innerHTML = `${flag} ${hour} : ${min} : ${sec}`;
for (var i = 0; i < 4; i++)
	document.body.children[1].children[1].append(document.createElement('li'));

document.body.children[1].children[1].children[0].innerHTML = `Screen: ${screen.width} * ${screen.height}`;
document.body.children[1].children[1].children[1].innerHTML = `Window Outer: ${window.outerWidth} * ${window.outerHeight}`;
document.body.children[1].children[1].children[2].innerHTML = `Window Inner: ${window.innerWidth} * ${window.innerHeight}`;
document.body.children[1].children[1].children[3].innerHTML = `Document: ${document.body.scrollWidth} * ${document.body.scrollHeight}`;
