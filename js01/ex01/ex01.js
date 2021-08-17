function minus_energy() {
    document.querySelector('.energy').value -= 10;
    if (document.querySelector('.energy').value < 10)
        document.querySelector('.energy').style.setProperty('--c', 'red');
}

function plus_every() {
    document.querySelector('.poo').value += 5;
    document.querySelector('.hungry').value += 5;
    document.querySelector('.energy').value += 5;
    document.querySelector('.coding').value += 5;
    document.querySelector('.love').value += 5;
    document.querySelector('.wash').value += 5;
}

setTimeout(minus_energy, 1000);
setTimeout(plus_every, 5000);
