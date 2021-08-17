let poo = document.getElementById('poo');
let coding = document.getElementById('coding');
let hungry = document.getElementById('hungry');
let love = document.getElementById('love');
let energy = document.getElementById('energy');
let wash = document.getElementById('wash');

energy.value -= 10;
energy.style.setProperty('--c', 'red');

function progress_update() {
    poo.value += 5;
    coding.value += 5;
    hungry.value += 5;
    love.value += 5;
    energy.value += 5;
    wash.value += 5;
}

setTimeout(progress_update, 5000);