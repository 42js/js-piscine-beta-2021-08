function addTime()
{
	let today = new Date();
	let hours = today.getHours();
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();
	let timetext;
	const timetag = document.getElementsByTagName("time");
	timetag[0].setAttribute("datetime", today.toISOString());
	if (hours >= 12)
		timetext = "오후 " + (hours - 12);
	else
		timetext = "오전 ";
	timetext += ":" + minutes + ":" + seconds;
	timetag[0].innerHTML = timetext;
}

function addList()
{
	const ul = document.getElementsByTagName('ul');

	const li1 = document.createElement("li");
	const li2 = document.createElement("li");
	const li3 = document.createElement("li");
	const li4 = document.createElement("li");

	const text1 = "Screen: " + screen.width + " * " + screen.height;
	const text2 = "Window Outer: " + window.outerWidth + " * " + window.outerHeight;
	const text3 = "Window Inner: " + window.innerWidth + " * " + window.innerHeight;
	const text4 = "Document: " + document.body.scrollWidth + " * " + document.body.scrollHeight

	const textNode1 = document.createTextNode(text1);
	const textNode2 = document.createTextNode(text2);
	const textNode3 = document.createTextNode(text3);
	const textNode4 = document.createTextNode(text4);

	li1.appendChild(textNode1);
	li2.appendChild(textNode2);
	li3.appendChild(textNode3);
	li4.appendChild(textNode4);

	ul[0].appendChild(li1);
	ul[0].appendChild(li2);
	ul[0].appendChild(li3);
	ul[0].appendChild(li4);
}

addTime();
addList();
