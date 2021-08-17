const input = document.querySelector('input');
const addButton = document.querySelector('button');

const list = document.querySelector('#list');
const doneList = document.querySelector('#doneList');

const todos = [];

let count = 0;

const saveTodos = () => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
}

const addItem = () => {
    if (addButton.className === 'edit')
        return;
    const todo = 
        `<li class="todo${count}" >
            <span class="value${count} todoValue" onClick="handleChecked(${count})">${input.value}</span>
            <span class="update">
                <img src="edit-regular.svg" class="editButton" onClick="editItem(${count})">
                <img src="times-solid.svg" class="deleteButton" onClick="deleteItem(${count})">
            </span>
        </li>`;
    todos[count] = {text: input.value, index: count};
    list.innerHTML += todo;
    count++;
    input.value = "";
    input.focus();
    saveTodos();
}

const loadItem = (value, index) => {
    const todo = 
        `<li class="todo${index}" >
            <span class="value${index} todoValue" onClick="handleChecked(${index})">${value}</span>
            <span class="update">
                <img src="edit-regular.svg" class="editButton" onClick="editItem(${index})">
                <img src="times-solid.svg" class="deleteButton" onClick="deleteItem(${index})">
            </span>
        </li>`;
    list.innerHTML += todo;
    count++;
    input.value = "";
    input.focus();
}

const loadTodos = () => {
    const loadedTodos = localStorage.getItem("TODOS");
    if (loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach((todoObj) => {
            loadItem(todoObj.text, todoObj.index);
        })
    }
}

const editItem = (index) => {
    const item = document.querySelector(`.value${index}`);
    input.value = item.innerText;
    addButton.innerHTML = "UPDATE";
    addButton.className = "edit";

    const editButton = document.querySelector('.edit');

    const handleUpdateClick = () => {
        item.innerText = input.value;
        editButton.removeEventListener('click', handleUpdateClick);
        addButton.innerHTML = "ADD";
        addButton.className = "add";
        input.value = "";
        input.focus();
        todos[index] = {text: item.innerText, index: index};
        saveTodos();
    };
    editButton.addEventListener('click', handleUpdateClick);
}

const deleteItem = (index) => {
    const item = document.querySelector(`.todo${index}`);
    list.removeChild(item);
    todos.splice(index, 1);
    saveTodos();
}

const handleChecked = (index) => {
    const item = document.querySelector(`.todo${index}`);
    const itemValue = document.querySelector(`.value${index}`).innerText;
    item.innerText = itemValue;
    list.removeChild(item);
    doneList.appendChild(item);
    todos.splice(index, 1);
    saveTodos();
}

addButton.addEventListener('click', addItem);
loadTodos();