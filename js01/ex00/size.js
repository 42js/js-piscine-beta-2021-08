var time = document.body.children[1].children[0];
var today = new Date();
var realTime = today.toLocaleTimeString();
time.append(realTime);

var ul = document.body.children[1].children[1];

var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');

li1.textContent = "Screen : " + screen.width + " * " + screen.height;
li2.textContent = "Window Outer : " + outerWidth + " * " + outerHeight;
li3.textContent = "Window Inner: " + innerWidth + " * " + innerHeight;
li4.textContent = "Document: " + document.body.scrollWidth + " * " + document.body.scrollHeight;

ul.append(li1);
ul.append(li2);
ul.append(li3);
ul.append(li4);
