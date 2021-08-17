window.onload = () => {
	const menus = document.querySelectorAll("section > ul > li");

	for (let menu of menus) {
		menu.addEventListener("mouseover", mouseover);
		menu.addEventListener("mouseout", mouseout);
		menu.addEventListener("click", click);
	} 
}

function mouseover(e) {
	console.log(e);
	const menu = e.target;
	menu.style.background = "skyblue";
	menu.style.cursor = "pointer";
}

function mouseout(e) {
	const menu = e.target;
	menu.style.background = "cornflowerblue";
}

function click(e) {
	const menu = e.target;
	alert(`${menu.innerText}를 선택하였습니다!`);
}