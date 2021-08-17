const todoForm = document.querySelector('form');
const input = todoForm.querySelector('input');
const fullList = document.querySelector('ul');

let todos = [];

function saveTodos(){
	localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(e){
	const li = e.target.parentElement;
	li.remove();
	todos = todos.filter(todo => todo.id !== parseInt(li.id));
	saveTodos();
}

function editTodo(e){
	const li = e.target.parentElement;
	const currentTodo = todos[todos.findIndex(todo => todo.id === parseInt(li.id))];
	const text = li.querySelector('.text').value;
	currentTodo.text = text;
	saveTodos();
}

function finishTodo(e){
	const li = e.target.parentElement;
	const currentTodo = todos[todos.findIndex(todo => todo.id === parseInt(li.id))];
	const inputText = li.querySelector('.text');
	currentTodo.checked = !currentTodo.checked;
	currentTodo.checked ? inputText.classList.add('checked') : inputText.classList.remove('checked');
	saveTodos();
}

function renderTodo(newTodo) {
	const li = document.createElement('li');
	li.id = newTodo.id;
	const inputText = document.createElement('input');
	inputText.value = newTodo.text;
	inputText.classList.add('text');
	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'X';
	deleteButton.addEventListener('click', deleteTodo);
	const editButton = document.createElement('button');
	editButton.innerText = 'Edit';
	editButton.addEventListener('click', editTodo);
	const checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	newTodo.checked ? checkBox.checked = true : checkBox.checked = false;
	newTodo.checked ? inputText.classList.add('checked') : inputText.classList.remove('checked');
	checkBox.addEventListener('change', finishTodo);

	li.appendChild(checkBox);
	li.appendChild(inputText);
	li.appendChild(editButton);
	li.appendChild(deleteButton);
	fullList.appendChild(li);
}

function onSubmit(e){
	e.preventDefault();
	const newTodo = input.value;
	input.value = '';
	const newTodoObj = {
		id: Date.now(),
		text: newTodo,
		checked: false,
	}
	todos.push(newTodoObj);
	renderTodo(newTodoObj);
	saveTodos();
}

todoForm.addEventListener('submit', onSubmit);

const getTodos = localStorage.getItem('todos');
if (getTodos) {
	const parseTodos = JSON.parse(getTodos);
	todos = parseTodos;
	todos.forEach(renderTodo);
}
