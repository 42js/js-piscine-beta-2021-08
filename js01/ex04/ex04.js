let lastScrollLocation = 0;
let direction = -1;

function scrollEvent(){
	const TopBody = document.querySelector('body');
	const topLocation = TopBody.getBoundingClientRect();
	let currentScrollLocation = window.scrollY;
	if (currentScrollLocation - lastScrollLocation > 0){
		if (direction === -1) {
			alert(`Scrolling Down! currentLocation: ${topLocation.top}`);
			direction = 1;
		}
	}
	else if (currentScrollLocation - lastScrollLocation < 0){
		if (direction === 1) {
			alert(`Scrolling Up! currentLocation: ${topLocation.top}`);
			direction = -1;
		}
	}
	lastScrollLocation = currentScrollLocation;
}

window.addEventListener('scroll', scrollEvent);
