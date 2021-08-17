const time = document.body.children[1].firstElementChild
const size = document.body.children[1].lastElementChild

function showTime(){
    const date = new Date();
    time.datetime = date.toISOString();
    time.innerText = date.toLocaleTimeString();
}


function showSize(){
    let list = [];    
    for (let i = 0; i < 4; i++){
        const li = document.createElement('li');
        list[i] = li;
    }
    list[0].innerText = `Screen : ${screen.width} * ${screen.height}`;
    list[1].innerText = `Window Outer : ${window.outerWidth} * ${window.outerHeight}`;
    list[2].innerText = `Window Inner : ${window.innerWidth} * ${window.innerHeight}`;
    list[3].innerText = `Document : ${document.documentElement.scrollWidth} * ${document.documentElement.scrollHeight}`;

    for (let i of list){
        size.appendChild(i);
    }
}

function init(){
    showTime();
    showSize();
}

init();