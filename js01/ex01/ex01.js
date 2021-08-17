
const progresses = document.getElementsByTagName('progress');
const energy = document.getElementById('energy');


energy.value = energy.value - 10;
energy.style.setProperty("--c", 'red');


setTimeout(function() {
	for(let progress of progresses)
		progress.value += 5;
  }, 5000);
