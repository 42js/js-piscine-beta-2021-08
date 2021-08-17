const progress = document.querySelectorAll('progress');

function setEnergyProgressToLow() {
  const energyProgress = document.querySelector('.energy');
  // console.log(energyProgress.getAttribute('value'));
  let val = Number(energyProgress.getAttribute('value'));
  val -= 10;

  energyProgress.setAttribute('value', val);
  energyProgress.style.setProperty('--c', 'red');
}

function addProgressAllTen() {
  for (let i = 0; i < progress.length; i += 1) {
    let val = Number(progress[i].getAttribute('value'));
    val += 5;
    // console.log(val);
    progress[i].setAttribute('value', `${val}`);
  }
}

window.onload = function exZeroOne() {
  setEnergyProgressToLow();

  setTimeout(() => {
    addProgressAllTen();
  }, 5000);
};
