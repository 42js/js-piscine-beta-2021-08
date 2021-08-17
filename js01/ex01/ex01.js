function attacked(){
	const energy = document.querySelector('.energy');
	const energyProgressBar = energy.lastChild;
	energyProgressBar.value -= 10
	energyProgressBar.style.setProperty('--c', '#FF0000')
}

function health(){
	document.querySelector('.poo').lastChild.value += 5;
	document.querySelector('.hungry').lastChild.value += 5;
	document.querySelector('.energy').lastChild.value += 5;
	document.querySelector('.coding').lastChild.value += 5;
	document.querySelector('.love').lastChild.value += 5;
	document.querySelector('.wash').lastChild.value += 5;
}
setTimeout(attacked, 500);
setTimeout(health, 5000);

