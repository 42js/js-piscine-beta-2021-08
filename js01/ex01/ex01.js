// getElementById
// getElementsByClassName

let wrapper = document.getElementById("wrapper");
wrapper.style.display = "flex";

let first = document.getElementById("first");
first.style.padding = "10px";
let second = document.getElementById("second");
second.style.padding = "10px";

function lowerEnergy() {
  let energy = document.getElementById("energy");
  energy.value -= 10;
  energy.style.setProperty("--c", "red");
}

function increaseAll() {
  let bars = document.getElementsByTagName("progress");
  console.log(bars);
  for (let i = 0; i < bars.length; i++) bars[i].value += 5;
}

function init() {
  //   setTimeout(lowerEnergy, 2000);
  lowerEnergy();
  setTimeout(increaseAll, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
