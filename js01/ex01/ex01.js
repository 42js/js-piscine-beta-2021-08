let energy = document.querySelector("progress.energy");
let progress = document.querySelectorAll("progress");

window.onload = function () {
    let value = energy.getAttribute("value") - 10;
    energy.setAttribute("value", String(value));
    energy.style.setProperty("--c", "red");
};

setTimeout(() => {
    progress.forEach((item) => {
        let value = parseInt(item.getAttribute("value")) + 5;
        item.setAttribute("value", String(value));
        return item;
    });
}, 3000);
