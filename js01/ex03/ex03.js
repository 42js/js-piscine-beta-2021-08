const menus = document.getElementsByTagName('li');
Array.from(menus).forEach(menu => {
	menu.addEventListener('click', onClick);
	menu.addEventListener('mouseover', onMouseOver);
	menu.addEventListener('mouseout', onMouseOut);
});

function onClick(e) {
	const select = e.target.parentElement.parentElement;
	const selectSection = select.querySelector('h2').innerText;
	alert(`오늘의 메뉴는 ${selectSection} 중 ${e.target.innerText}!`)
}

function onMouseOver(e) {
	e.stopPropagation();
	e.target.style.backgroundColor = 'red'
}

function onMouseOut(e) {
	e.stopPropagation();
	e.target.style.backgroundColor = 'cornflowerblue'
}
