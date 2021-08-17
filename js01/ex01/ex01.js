const polar = {
    poo: 35,
    hungry: 45,
    energy: 20,
    coding: 80,
    love: 95,
    wash: 90,
};

function minus() {
    document.querySelector('.energy').value -= 10;
};

function plus_five() {
    document.querySelector('.poo').value += 5;
    document.querySelector('.hungry').value += 5;
    document.querySelector('.energy').value += 5;
    document.querySelector('.coding').value += 5;
    document.querySelector('.love').value += 5;
    document.querySelector('.wash').value += 5;
};

const left = document.querySelector('.left');
const right = document.querySelector('.right');

setTimeout(minus, 1000);

left.children[5].style.setProperty('--c', '#FF0000');

// left

left.children[1].setAttribute('value', polar.poo);
left.children[3].setAttribute('value', polar.hungry);
left.children[5].setAttribute('value', polar.energy);

// right

right.children[1].setAttribute('value', polar.coding);
right.children[3].setAttribute('value', polar.love);
right.children[5].setAttribute('value', polar.wash);

setTimeout(plus_five, 5000);