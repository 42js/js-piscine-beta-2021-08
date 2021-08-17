// time
let time = document.body.children[1].children[0];
console.log(time[0]);

// time ISO format
var date = new Date();
// Korean uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString('ko-KR'));  // 성공
// → "오후 12:00:00"
// time tag 에 시간 노출
time.append(date.toLocaleTimeString('ko-KR'));

// test print size
/*
let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;
console.log("h : " + height + ", w : " + width);  // 729, 789

height = window.innerHeight;
width = window.innerWidth;
console.log("h : " + height + ", w : " + width); // 729, 789

height = document.documentElement.innerHeight;
width = document.documentElement.innerWidth;
console.log("h : " + height + ", w : " + width); // undefined, undefined

height = document.documentElement.scrollHeight;
console.log("h : " + height + ", w : " + width); // 1229, undefined

height = screen.height;
width = screen.width;
console.log("h : " + height + ", w : " + width); // h : 840, w : 1344
*/

// unordered list 의 list 찾기
let list = document.getElementsByTagName("li");
// console.log(list);
// console.log(list[0]);  // "Screen: "
// Screen size 세팅하기
// list[0].append(screen.width + " * " + screen.height);
// console.log(list[1]);  // "Window Outer: "
// Window outer size 세팅하기
// list[1].append(window.outerWidth + " * " + window.outerHeight);
// console.log(list[2]);  // "Window Inner: "
// Window inner size 세팅하기
// list[2].append(window.innerWidth + " * " + window.innerHeight);
// console.log(list[3]);  // "Document: "
// Document 전체 사이즈 세팅하기, 스크롤까지 포함
// list[3].append(document.documentElement.clientWidth + " * " + document.documentElement.scrollHeight)

console.log(document.body.children);  // body 안에 header main
console.log(document.body.children[1]);  // main 안에 time ul
console.log(document.body.children[1].children[1]);  // ul

let ul = document.body.children[1].children[1];
let li = document.createElement("li");
li.append("Screen: " + screen.width + " * " + screen.height);
ul.appendChild(li);
li = document.createElement("li");
li.append("Window Outer: " + window.outerWidth + " * " + window.outerHeight);
ul.appendChild(li);
li = document.createElement("li");
li.append("Window Inner: " + window.innerWidth + " * " + window.innerHeight);
ul.appendChild(li);
li = document.createElement("li");
li.append("Document: " + document.body.clientWidth + " * " + document.body.clientHeight);
ul.appendChild(li);

console.log(document.body.children[1].children[1]);  // ul
