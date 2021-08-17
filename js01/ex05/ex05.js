const input = document.querySelector('input');
const addButton = document.querySelector('button');

const list = document.querySelector('#list');
const doneList = document.querySelector('#doneList');

let index = 0;

const addItem = () => {
    if (addButton.className === 'edit')
        return;
    let todo = 
        `<li class="todo${index}" >
            <span class="value${index} todoValue" onClick="handleChecked(${index})">${input.value}</span>
            <span class="update">
                <img src="edit-regular.svg" class="editButton" onClick="editItem(${index})">
                <img src="times-solid.svg" class="deleteButton" onClick="deleteItem(${index})">
            </span>
        </li>`;
    list.innerHTML += todo;
    index++;
    input.value = "";
    input.focus();
}

const editItem = (index) => {
    let item = document.querySelector(`.value${index}`);
    input.value = item.innerText;
    addButton.innerHTML = "UPDATE";
    addButton.className = "edit";

    let editButton = document.querySelector('.edit');

    const handleUpdateClick = () => {
        item.innerText = input.value;
        editButton.removeEventListener('click', handleUpdateClick);
        addButton.innerHTML = "ADD";
        addButton.className = "add";
        input.value = "";
        input.focus();
    };
    editButton.addEventListener('click', handleUpdateClick);
}

const deleteItem = (index) => {
    let item = document.querySelector(`.todo${index}`);
    list.removeChild(item);
}

const handleChecked = (index) => {
    let item = document.querySelector(`.todo${index}`);
    let itemValue = document.querySelector(`.value${index}`).innerText;
    item.innerText = itemValue;
    list.removeChild(item);
    doneList.appendChild(item);
}

addButton.addEventListener('click', addItem);