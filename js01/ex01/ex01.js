function dofirst()
{
	var energy = document.querySelector("#energy");
	energy.setAttribute("value", Number(energy.getAttribute("value")) - 10);
	energy.style.setProperty("--c", "red");
}

function dosecond()
{
	var poo = document.querySelector("#poo");
	var hungry = document.querySelector("#hungry");
	var energy = document.querySelector("#energy");
	var coding = document.querySelector("#coding");
	var hobby = document.querySelector("#hobby");
	var clean = document.querySelector("#clean");
	poo.setAttribute("value", Number(poo.getAttribute("value")) + 5);
	hungry.setAttribute("value", Number(hungry.getAttribute("value")) + 5);
	energy.setAttribute("value", Number(energy.getAttribute("value")) + 5);
	coding.setAttribute("value", Number(coding.getAttribute("value")) + 5);
	hobby.setAttribute("value", Number(hobby.getAttribute("value")) + 5);
	clean.setAttribute("value", Number(clean.getAttribute("value")) + 5);
}

setTimeout(dofirst, 1000);
setTimeout(dosecond, 1500);
