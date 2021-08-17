const li = document.querySelectorAll('li');

for (var i = 0; i < 9; i++) {
    li[i].addEventListener('click', function (e) {
        if (e.target) {
            e.target.style = 'background: red;';
            alert(e.target.innerText);
        };
    });
};