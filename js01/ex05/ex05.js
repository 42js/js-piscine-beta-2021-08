const toDoInput = document.querySelector('input');
const button = document.querySelector('.plus');
const ToDoList = document.querySelector('.sub-wrap');
let toDos = [];
button.addEventListener('click', handleSubmit);

function handleSubmit(e){
	paintToDo(toDoInput.value);
	toDoInput.value = "";
}

function saveToDo(){
	localStorage.setItem("toDo", JSON.stringify(toDos));
}

function updateToDo(e){
	const tg = e.target;
	const div = tg.parentNode;
	let updateInput = prompt('수정할 문장을 적으세요');
	alert(updateInput);
	let toDoIdx = 0;
	toDos.forEach(e => {
		if(e.id == parseInt(div.id))
			toDoIdx = e.id;
	});
	toDos[toDoIdx-1].text = updateInput;
	div.querySelector('span').innerHTML = updateInput;
	saveToDo();
}

function deleteToDo(e){
	const tg = e.target;
	const div = tg.parentNode;
	ToDoList.removeChild(div);

	const cleanToDos = toDos.filter(e => {
		return e.id !== parseInt(div.id);
	});
	toDos = cleanToDos;
	saveToDo();
}

function paintToDo(text){
	let newId = toDos.length + 1;
	const divEl = document.createElement('div');
	const spanEl0 = document.createElement('span');
	const spanEl1 = document.createElement('span');
	const spanEl2 = document.createElement('span');
	spanEl1.addEventListener('click', updateToDo);
	spanEl2.addEventListener('click', deleteToDo);
	spanEl0.innerHTML = text;
	spanEl1.innerHTML = '🛠';
	spanEl2.innerHTML = '❌';
	divEl.className = 'Dos';
	divEl.id = newId;
	divEl.appendChild(spanEl0);
	divEl.appendChild(spanEl1);
	divEl.appendChild(spanEl2);
	ToDoList.appendChild(divEl);

	const toDoObj = {
		text: text,
		id : newId
	};
	toDos.push(toDoObj);
	saveToDo();
}
function loadToDos() {
	const loadedToDos = localStorage.getItem("toDo");
	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(e => {
			paintToDo(e.text);
		});
	}
}

function init() {
	loadToDos();
	button.addEventListener("click", handleSubmit);
}
init();
