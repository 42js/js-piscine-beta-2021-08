let poo = document.getElementById('poo');
let coding = document.getElementById('coding');
let hungry = document.getElementById('hungry');
let love = document.getElementById('love');
let energy = document.getElementById('energy');
let wash = document.getElementById('wash');
const firstEl = document.querySelector('.first');
firstEl.style.margin = '0px 20px 0px 0px';

energy.value = energy.value - 10;
energy.style.setProperty("--c", 'red');

setTimeout(function() {
    poo.value = poo.value + 5;
    coding.value = coding.value + 5;
    hungry.value = hungry.value + 5;
    love.value = love.value + 5;
    energy.value = energy.value + 5;
    wash.value = wash.value + 5;
  }, 5000);