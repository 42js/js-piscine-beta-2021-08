function decreaseValueAndColorRead(className, amount) {
  const info = document.getElementsByClassName(className)[0];

  info.setAttribute('value', parseInt(info.getAttribute('value'), 10) - amount);
  info.style.setProperty('--c', 'red');
}

function increaseValue(className, amount) {
  const info = document.getElementsByClassName(className)[0];

  info.setAttribute('value', parseInt(info.getAttribute('value'), 10) + amount);
}

window.onload = function process() {
  decreaseValueAndColorRead('energy', 10);
  const classNames = ['poo', 'hungry', 'energy', 'coding', 'love', 'wash'];
  setTimeout(() => classNames.forEach((className) => {
    increaseValue(className, 5);
  }), 5000);
};
