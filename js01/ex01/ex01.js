window.onload = () => {
	jsOnload();
	afterFiveMin();
}

const jsOnload = () => {
	const energy = document.getElementsByClassName("energy")[0];
	energy.value -= 10;
	energy.style.setProperty("--c", "red");
}

const progressHandler = () => {
	const progresses = document.getElementsByTagName("progress");
	for (let progress of progresses) {
		progress.value += 5;
	}
}

const afterFiveMin = () => {
	setTimeout(progressHandler, 5000);
}