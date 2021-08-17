const menus = document.getElementsByTagName('li');
Array.from(menus).forEach(menu => {
	menu.addEventListener('click', func);
});

function func(e) {
	Array.from(menus).forEach(menu => {
		menu.style.backgroundColor = 'cornflowerblue'
	});
	e.target.style.backgroundColor = 'red'
	setTimeout(function(){
		alert(`오늘의 메뉴는 ${e.target.innerText}!`)
	}, 100);
}
