window.onload = () => {
	const form = document.forms.calculator;

	form.name.oninput = calculate;
	form.price.oninput = calculate;
	form.is_member.onclick = calculate;
	form.level.onchange = calculate;
	
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDay();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const sec = date.getSeconds();

	const time = document.querySelector("time");
	if (hour < 12 && hour >= 0) 
		time.innerHTML = `${year}. ${month}. ${day}. 오전 ${hour}:${minute}:${sec}`;
	else
		time.innerHTML = `${year}. ${month}. ${day}. 오후 ${hour - 12}:${minute}:${sec}`;

	time.dateTime = date.toISOString();
	if (form.is_member.checked === false) 
		level.disabled = "disabled";
}

function addComma(num) {
	let regexp = /\B(?=(\d{3})+(?!\d))/g;
	return num.toString().replace(regexp, ',');
}

function calculate() {
	const form = document.forms.calculator;
	// const time = document.
	// const date = new Date();
	const name = form.name.value;
	const price = form.price.value;
	const is_member = form.is_member.checked;
	const level = form.level;
	
	document.querySelector('.name').innerHTML = name;
	document.querySelector('.price').innerHTML = addComma(price);

	if (is_member === true) 
		level.disabled = false;
	else {
		level.disabled = "disabled";
		level.value = "";
	}

	let sale = undefined;
	switch (level.value) {
		case 'level1':
			sale = price * 0.95;
			break;
		case 'level2':
			sale = price * 0.90;
			break;
		case 'level3':
			sale = price * 0.85;
			break;
	}
	if (sale != undefined)
		document.querySelector('.sale').innerHTML = addComma(sale);
}
