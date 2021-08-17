let time = new Date();
let year = time.getFullYear();
let month = time.getMonth()+1;
let day = time.getDate();
let AmPm = time.getHours() >= 12? '오후' : '오전';
let hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
let minutes = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes();
let seconds = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds();

const timeEl = document.querySelector('time');
timeEl.setAttribute('datetime', time);
timeEl.innerHTML = `${year}. ${month}. ${day}. ${AmPm} ${hours}:${minutes}:${seconds}`;

function setProduct(){
	let name = document.getElementById('product').value;
	document.querySelectorAll('ul li')[0].innerHTML = `상품명: ${name}`;
}

function setPrice(){
	let num = document.getElementById('price').value;
	let numArr = num.split('');
	let cnt = 0;
	for(let i = 1; i < num.length/3; i++){
		numArr.splice(i+cnt*3, 0, ',');
		cnt++;
	}
	if (num.length !== 0)
		document.querySelectorAll('ul li')[1].innerHTML = `원가: ${numArr.join('')}`;
	else
		document.querySelectorAll('ul li')[1].innerHTML = ``;
	setMember();
	setMembership();
}

const checkBox = document.getElementById('checkbox');
const membership = document.querySelector('.membership');
function setMember(){
	if(checkBox.checked)
		membership.removeAttribute("disabled");
	else
		membership.setAttribute("disabled","");
}

function setMembership(){
	let num = document.getElementById('price').value;
	if (membership.value === 'Lv1')
		num = +num * 0.95;
	if (membership.value === 'Lv2')
		num = +num * 0.9;
	if (membership.value === 'Lv3')
		num = +num * 0.85;
	num = parseInt(num);
	num = num + "";
	let numArr = num.split('');
	let cnt = 0;
	for(let i = 1; i < num.length/3; i++){
		numArr.splice(i+cnt*3, 0, ',');
		cnt++;
	}
	if (isNaN(num))
		document.querySelectorAll('ul li')[2].innerHTML = ``;
	else
		document.querySelectorAll('ul li')[2].innerHTML = `할인가: ${numArr.join('')}`;
}
