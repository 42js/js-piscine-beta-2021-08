let position = document.documentElement.scrollTop;
let newPosition;

const pTagList = document.querySelectorAll('p');

const handleScrollEvent = (e) => {
    e.stopPropagation();
    newPosition = document.documentElement.scrollTop;
    if (newPosition > position + 30)
        alert('down');
    else if (position > newPosition + 30)
        alert('up');
    for (const pTag of pTagList) {
        if (window.innerHeight> pTag.getBoundingClientRect().top + 500 && newPosition > position) {
            pTag.style.backgroundColor = '#ddd';
        }
        else
            pTag.style.backgroundColor = 'white';
    }
    position = newPosition;
};

window.addEventListener('scroll', handleScrollEvent);
