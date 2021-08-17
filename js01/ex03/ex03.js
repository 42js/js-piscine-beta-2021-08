const btn = document.querySelector('li');
// const gimbob = document.getElementById('gimbob');
// const fried = document.getElementById('fried');
// const sundae = document.getElementById('sundae');
// const pasta = document.getElementById('pasta');
// const steak = document.getElementById('steak');
// const burger = document.getElementById('burger');
// const pizza = document.getElementById('pizza');
// const chicken = document.getElementById('chicken');

btn.addEventListener('click', (event) => {
    alert('click');
});

btn.addEventListener('mouseenter', (event) => {
    btn.style.setProperty("background", 'red');
});

btn.addEventListener('mouseleave', (event) => {
    btn.style.setProperty("background", 'cornflowerblue');
});

// gimbob.addEventListener('mouseleave', (event) => {
//     gimbob.style.setProperty("background", 'cornflowerblue');
// });

// gimbob.addEventListener('mouseenter', (event) => {
//     gimbob.style.setProperty("background", 'red');
// });

// fried.addEventListener('mouseenter', (event) => {
//     fried.style.setProperty("background", 'red');
// });

// fried.addEventListener('mouseleave', (event) => {
//     fried.style.setProperty("background", 'cornflowerblue');
// });

// sundae.addEventListener('mouseleave', (event) => {
//     sundae.style.setProperty("background", 'cornflowerblue');
// });

// sundae.addEventListener('mouseenter', (event) => {
//     sundae.style.setProperty("background", 'red');
// });

// pasta.addEventListener('mouseenter', (event) => {
//     pasta.style.setProperty("background", 'red');
// });

// pasta.addEventListener('mouseleave', (event) => {
//     pasta.style.setProperty("background", 'cornflowerblue');
// });

// steak.addEventListener('mouseleave', (event) => {
//     steak.style.setProperty("background", 'cornflowerblue');
// });

// steak.addEventListener('mouseenter', (event) => {
//     steak.style.setProperty("background", 'red');
// });

// burger.addEventListener('mouseenter', (event) => {
//     burger.style.setProperty("background", 'red');
// });

// burger.addEventListener('mouseleave', (event) => {
//     burger.style.setProperty("background", 'cornflowerblue');
// });

// pizza.addEventListener('mouseleave', (event) => {
//     pizza.style.setProperty("background", 'cornflowerblue');
// });

// pizza.addEventListener('mouseenter', (event) => {
//     pizza.style.setProperty("background", 'red');
// });

// chicken.addEventListener('mouseenter', (event) => {
//     chicken.style.setProperty("background", 'red');
// });

// chicken.addEventListener('mouseleave', (event) => {
//     chicken.style.setProperty("background", 'cornflowerblue');
// });