function getTime() {
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
	document.body.querySelector('time').datetime = time.toISOString();
	document.body.querySelector('time').innerHTML = `${flag} ${hour} : ${min} : ${sec}`;
}

getTime();

function print_name() {
	let p_name = document.querySelector('#product_name').value;
	document.querySelector('.name').innerText = `상품명: ${p_name}`;
}

function print_org_val() {
	const ori_val = document.querySelector('#cost').value;
	document.querySelector('.price').innerText = `원가: ${ori_val}`;
}

function checkRank() {
	let member = document.querySelector('#membership');
	if (member.checked)
		document.querySelector('#grade').disabled = false;
	else
		document.querySelector('#grade').disabled = true;
}

function print_after_val(what_member) {
	let percentage;
	let price = document.querySelector('#cost').value;
	if (what_member.value == 'lv1')
		percentage = 0.95;
	else if (what_member.value == 'lv2')
		percentage = 0.9;
	else if (what_member.value == 'lv3')
		percentage = 0.85;
	if (document.querySelector('#grade').disabled)
		percentage = 1;
	price = price * percentage;
	document.querySelector('.price_after').innerText = `할인가: ${price}`;
}