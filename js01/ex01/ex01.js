const poo = document.querySelector('#poo');
const hungry = document.querySelector('#hungry');
const energy = document.querySelector('#energy');
const coding = document.querySelector('#coding');
const love = document.querySelector('#love');
const wash = document.querySelector('#wash');

const statusArr = [ poo, hungry, energy, coding, love, wash ];

for (const property in energy.style) {
  console.log(`${property}: ${energy.style[property]}`);
}

setTimeout(() => {
  energy.style.setProperty("--c", "#FF0000");
  energy.value -= 10;
}, 100);

setTimeout(() => {
  for (const each of statusArr) {
    each.value += 5;
  }
}, 5000);
