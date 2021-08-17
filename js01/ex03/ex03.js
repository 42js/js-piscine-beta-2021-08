const foods = document.querySelectorAll('li');

const handleFoodMouseOver = (e) => {
    e.stopPropagation();
    e.target.style.backgroundColor = 'red';
};

const handleFooldMouseOut = (e) => {
    e.stopPropagation();
    e.target.style.backgroundColor = 'cornflowerblue';
}

const handleFoodClick = (e) => {
    e.stopPropagation();
    alert(`you clicked ${e.target.innerHTML}`);
}

foods.forEach((food) => {
    food.addEventListener('mouseover', handleFoodMouseOver);
    food.addEventListener('mouseout', handleFooldMouseOut);
    food.addEventListener('click', handleFoodClick);
});