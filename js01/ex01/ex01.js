let poo_var = document.querySelector("#poo");
let energy_var = document.querySelector("#energy");
let hungry_var = document.querySelector("#hungry");
let coding_var = document.querySelector("#coding");
let love_var = document.querySelector("#love");
let wash_var = document.querySelector("#wash");

energy_var.setAttribute("value", energy_var.getAttribute("value") - 10);
energy_var.style.setProperty("--c", "red");
// console.log(energy_var.style);
// console.log(energy_var);

function move_progress_bar() {
	poo_var.setAttribute("value", Number(poo_var.getAttribute("value")) + 5);
	energy_var.setAttribute("value", Number(energy_var.getAttribute("value")) + 5);
	hungry_var.setAttribute("value", Number(hungry_var.getAttribute("value")) + 5);
	coding_var.setAttribute("value", Number(coding_var.getAttribute("value")) + 5);
	love_var.setAttribute("value", Number(love_var.getAttribute("value")) + 5);
	wash_var.setAttribute("value", Number(wash_var.getAttribute("value")) + 5);
}

setTimeout(move_progress_bar, 5000);
