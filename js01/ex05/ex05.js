const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";
let toDos = [];
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
    // toDo.id는 int, li.id는 string임.
    /* 위에서 li가 지워져 toDo.id는 있지만 li.id는 사라진상태.
     따라서, 위 조건을 통해 toDo.id에서 지워야할 id를 찾음.*/
    /* filter()는 toDos각각의 원소들에 대해 해당 함수가 실행되고,
      해당 함수를 만족하는 원소들로만 새로운 배열을 생성.*/
  });
  toDos = cleanToDos;
  saveToDos();
}
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  // toDos배열에 아무것도 없을 경우 id를 1로 해주려고.
  // 즉, id를 0이 아닌 1부터 쓰려고.
  delBtn.innerText = "❌";
  editBtn.innerText = "✏️";
  delBtn.addEventListener("click", deleteToDo);
  editBtn.addEventListener("click", editToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(editBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  li.id = newId;
  // li에 id를 할당해줘서 todo(li)삭제시 해당 id를 가진 li삭제하려고.
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function editToDo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  let newInput = prompt("입력하세요");
  let newId = 0;
  toDos.forEach((e) => {
    if (e.id == li.id) newId = e.id;
  });
  toDos[newId - 1].text = newInput;
  li.querySelector("span").innerText = newInput;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  // JSON.stringify()는 toDos(object)를 string으로 바꿔줌.
  // localstorage는 string형태로 저장되기 때문에
  // {text,id}를 가진 toDos를 string으로 바꿔준다.
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    // string인 loadedToDos를 object로 변환.
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
