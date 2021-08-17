const progressPoo = document.querySelectorAll(".first progress")[0];
const progressHungry = document.querySelectorAll(".first progress")[1];
const progressEnergy = document.querySelectorAll(".first progress")[2];
const progressCoding = document.querySelectorAll(".second progress")[0];
const progressLove = document.querySelectorAll(".second progress")[1];
const progressWash = document.querySelectorAll(".second progress")[2];
progressPoo.setAttribute('max', '100');
progressPoo.setAttribute('value', '40');
progressHungry.setAttribute('max', '100');
progressHungry.setAttribute('value', '50');
progressEnergy.setAttribute('max', '100');
progressEnergy.setAttribute('value', '20');
progressCoding.setAttribute('max', '100');
progressCoding.setAttribute('value', '70');
progressLove.setAttribute('max', '100');
progressLove.setAttribute('value', '90');
progressWash.setAttribute('max', '100');
progressWash.setAttribute('value', '80');

const wrapEl = document.querySelector('.wrap');
wrapEl.style.display = 'flex';
const firstEl = document.querySelector('.first');
firstEl.style.margin = '0px 20px 0px 0px';

// js 로딩된 후
window.addEventListener('DOMContentLoaded', () => {
	setTimeout(reduceEnergy, 2000);
	setTimeout(changeStatue, 5000);
});
function reduceEnergy(){
	progressEnergy.style.setProperty("--c", 'red');
	progressEnergy.setAttribute('value', '10');
}
// 5초 후 실행
function changeStatue(){
	progressPoo.setAttribute('value', '45');
	progressHungry.setAttribute('value', '55');
	progressEnergy.setAttribute('value', '15');
	progressCoding.setAttribute('value', '75');
	progressLove.setAttribute('value', '95');
	progressWash.setAttribute('value', '85');
}
