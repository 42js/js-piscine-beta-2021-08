const energy = document.querySelector(".energyProgress"),
    progress = document.querySelectorAll('progress');


function energyBar(){
    energy.value -= 10;
    energy.style.setProperty('--c', 'red');
}

function init(){
    energyBar();
    setTimeout(() => {
        progress.forEach( el => el.value += 5);
    }, 5000)
}

init();

