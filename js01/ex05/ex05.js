const content = document.body.children[0].children[1].children[1];


function addText(text) {
    const count = document.querySelectorAll('.content-list').length;
    const last = document.body.children[0].children[1].children[1].lastChild.firstChild;
    if (count < 9) {
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');

        div1.setAttribute('class', 'content-list');
        div1.className += ' display-flex';
        div1.setAttribute('onmouseover', 'mouseOver(this)');
        div1.setAttribute('onmouseout', 'mouseOut(this)');
        div1.setAttribute('onclick', 'mouseClick(this)');
        div2.setAttribute('class', 'content-text');
        if (count == 0) div2.setAttribute('id', `${count}`);
        else if (count > 0) div2.setAttribute('id', `${String(Number(last.id) + 1)}`)
        
        div3.setAttribute('class', 'display-flex');

        content.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(div3);

        p1.setAttribute('class', 'content-button');
        p1.setAttribute('id', 'modify');
        p1.setAttribute('onclick', 'modifyText(this)');
        p2.setAttribute('class', 'content-button');
        p2.setAttribute('id', 'delete');
        p2.setAttribute('onclick', 'deleteText(this)');


        p1.innerHTML = "&#9997";
        p2.innerHTML = "&#10006";

        div3.appendChild(p1);
        div3.appendChild(p2);

        div2.innerHTML = text.value;
    }
}

function modifyText(e) {
    const edit = e.parentNode.parentNode.firstChild;
    const text = prompt('수정할 내용을 입력해 주세요.');
    edit.innerHTML = text;
}

function deleteText(e) {
    const edit = e.parentNode.parentNode;

    edit.remove();
}

function mouseOver(e) {
    e.setAttribute('style', 'background-color: burlywood;');
}

function mouseOut(e) {
    e.setAttribute('style', 'background-color: blanchedalmond;');
}

function mouseClick(e) {
    const query = document.querySelectorAll('.content-list');
    for (var i = 0; i < query.length; i++) {
        if (query[i].firstChild.id != e.firstChild.id) query[i].setAttribute('style', 'font-weight: normal;');
        else e.setAttribute('style', 'font-weight: bold;');
    }
}