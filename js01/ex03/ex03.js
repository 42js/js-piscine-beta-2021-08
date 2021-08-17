window.onload = () => {
	const menus = document.querySelectorAll("section > ul > li");

	for (let menu of menus) {
		menu.addEventListener("mouseover", mouseover);
		menu.addEventListener("mouseout", mouseout);
		menu.addEventListener("click", click);
	} 
}

const mouseover = (e) => {
	e.preventDefault();
	const menu = e.target;
	menu.style.background = "red";
}

const mouseout = (e) => {
	e.preventDefault();
	const menu = e.target;
	menu.style.background = "cornflowerblue";
}

const click = (e) => {}