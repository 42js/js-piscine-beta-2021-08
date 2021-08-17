function displayBarsVertical(polarInfos, dirClassName) {
  const minValue = 0;
  const maxValue = 100;
  const div = document.getElementsByClassName(dirClassName)[0];

  Object.keys(polarInfos).forEach((info) => {
    const span = document.createElement('span');
    span.append(polarInfos[info].barName);
    const br = document.createElement('br');
    const progress = document.createElement('progress');
    progress.setAttribute('value', polarInfos[info].value);
    progress.setAttribute('min', minValue);
    progress.setAttribute('max', maxValue);
    progress.setAttribute('class', info);

    div.append(span, br, progress, br);
  });
  console.log(div);
}

function displayBars() {
  const leftPolarInfos = {
    poo: { barName: '용변', value: 25 },
    hungry: { barName: '허기', value: 50 },
    energy: { barName: '에너지', value: 15 },
  };
  const rightPolarInfos = {
    coding: { barName: '코딩력', value: 80 },
    love: { barName: '덕력', value: 95 },
    wach: { barName: '위생', value: 90 },
  };
  displayBarsVertical(leftPolarInfos, 'left');
  displayBarsVertical(rightPolarInfos, 'right');
}

function decreaseValueAndColorRead(progress, amount) {
  progress.setAttribute('value', parseInt(progress.getAttribute('value'), 10) - amount);
  progress.style.setProperty('--c', 'red');
}

function increaseValue(progress, amount) {
  progress.setAttribute('value', parseInt(progress.getAttribute('value'), 10) + amount);
}

window.onload = function process() {
  displayBars();
  
  const progresses = document.querySelectorAll('progress');
  decreaseValueAndColorRead(progresses[2], 10);
  setTimeout(() => progresses.forEach((progress) => {
    increaseValue(progress, 5);
  }), 5000);
};
