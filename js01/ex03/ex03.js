const foods = document.querySelectorAll('li');

const handleFoodClick = (e) => {
    e.stopPropagation();
    e.target.style.backgroundColor = 'red';
    alert(`you clicked ${e.target.innerHTML}`);
};

foods.forEach((food) => food.addEventListener('click', handleFoodClick));