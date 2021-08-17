function getTime() {
	const time = document.querySelector('time');
	const date = new Date().toLocaleString()
	const datetime = new Date().toISOString();

	time.setAttribute('datetime', datetime);
	time.innerText = date;
}
getTime();

const checkBox = document.querySelector('.check');
const selectBox = document.querySelector('.select');

function onChangeCheckBox() {
	if (checkBox.checked === false) {
		selectBox.disabled = true
		onChangePrice();
		getTime();
	}
	else {
		selectBox.removeAttribute('disabled');
		onChangePrice();
		getTime();
	}
}
checkBox.addEventListener('change', onChangeCheckBox);

const itemName = document.querySelector('.form-name');
const liName = document.querySelector('.li-name');

function onChangeItemName() {
	liName.innerText = itemName.value;
	getTime();
}

const itemPrice = document.querySelector('.form-price');
const liPrice = document.querySelector('.li-price');
const discountPrice = document.querySelector('.li-discount');

function onChangePrice() {
	if (itemPrice.value === '')
		return ;
	let percent;
	if (selectBox.disabled)
		percent = 0;
	else
		percent = selectBox.options[selectBox.selectedIndex].getAttribute('data-percent');
	liPrice.innerText = parseInt(itemPrice.value).toLocaleString();
	discountPrice.innerText = Math.floor(parseInt(itemPrice.value) * (1 - percent)).toLocaleString();
	getTime();
}

function preventE(e) {
	if (e.key === 'e' || e.key === 'E')
		e.preventDefault();
}
itemPrice.addEventListener('keypress', preventE);
