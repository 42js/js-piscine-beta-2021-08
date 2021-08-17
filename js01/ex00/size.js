time = document.body.children[1].children[0];
datetime = new Date();
time.setAttribute('datetime', datetime.toISOString());
hour = datetime.getHours();
if (hour > 12) {
    time.innerHTML += '오후 ';
    hour -= 12;
}
else
    time.innerHTML += '오전 ';
time.innerHTML += hour + ':' + datetime.getMinutes() + ':' + datetime.getSeconds();

ul = document.body.children[1].children[1];
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
li1.innerHTML = "Screen: " + screen.width + " * " + screen.height;
li2.innerHTML = "Window Outer: " + window.outerWidth + " * " + window.outerHeight;
li3.innerHTML = "Window Inner: " + window.innerWidth + " * " + window.innerHeight;
li4.innerHTML = "Document: " + document.body.scrollWidth + " * " + document.body.scrollHeight;
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);