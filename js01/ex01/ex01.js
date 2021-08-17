const energyBar = document.querySelector('.energy');

setTimeout(() => {
    energyBar.value -= 10;
    energyBar.style.setProperty('--c', 'red');
})

const progressBars = document.querySelectorAll('.progress');

setTimeout(() => {
    progressBars.forEach(progressBar => progressBar.value += 5);
}, 5000)