function first() {
    var energy = document.querySelector("#energy")
    energy.setAttribute("value", Number(energy.getAttribute("value")) - 10);
    energy.style.setProperty("--c", "red");
}

function second() {
    poo = document.querySelector("#poo");
    hungry = document.querySelector("#hungry");
    energy = document.querySelector("#energy");
    coding = document.querySelector("#coding");
    love = document.querySelector("#love");
    wash = document.querySelector("#wash");
    console.log(poo.getAttribute("value"));
    poo.setAttribute("value", Number(poo.getAttribute("value")) + 5);
    hungry.setAttribute("value", Number(hungry.getAttribute("value")) + 5);
    energy.setAttribute("value", Number(energy.getAttribute("value")) + 5);
    coding.setAttribute("value", Number(coding.getAttribute("value")) + 5);
    love.setAttribute("value", Number(love.getAttribute("value")) + 5);
    wash.setAttribute("value", Number(wash.getAttribute("value")) + 5);
}

setTimeout(first, 1000);
setTimeout(second, 5000);