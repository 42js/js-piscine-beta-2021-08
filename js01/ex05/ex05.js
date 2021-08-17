var todoStorage = [];

const storageNew = (t) => {
  todoStorage.push(t);
  localStorage.setItem("todo", JSON.stringify(todoStorage));
};

const storageUpdate = (old, update) => {
  var idx = todoStorage.indexOf(old);
  todoStorage[idx] = update;
  localStorage.setItem("todo", JSON.stringify(todoStorage));
};

const storageDelete = (t) => {
  var idx = todoStorage.indexOf(t);
  todoStorage.splice(idx, 1);
  localStorage.setItem("todo", JSON.stringify(todoStorage));
};

var addAction = document.querySelector("input[name=add]");
var todoField = document.querySelector("input[name=todo]");
var listBase = document.querySelector("section");

const newTodo = (content) => {
  var status = false;
  var list = document.createElement("li");

  var editImage = document.createElement("img");
  editImage.src = "./pen-solid.svg";
  editImage.addEventListener("click", () => {
    var editField = document.createElement("span");

    var editTodoField = document.createElement("input");
    editTodoField.setAttribute("type", "text");
    editTodoField.value = list.innerText;

    var editTodoEnter = document.createElement("input");
    editTodoEnter.setAttribute("type", "button");
    editTodoEnter.setAttribute("value", "modify");
    editTodoEnter.addEventListener("click", () => {
      var old = list.innerText.substr(0, list.innerText.length - 1);
      storageUpdate(old, editTodoField.value);
      list.innerText = editTodoField.value;
      list.append(editImage, deleteImage, document.createElement("br"));
    });

    var editTodoCancel = document.createElement("input");
    editTodoCancel.setAttribute("type", "button");
    editTodoCancel.setAttribute("value", "cancel");
    editTodoCancel.addEventListener("click", () => {
      list.removeChild(editField);
    });

    editField.append(editTodoField, editTodoEnter, editTodoCancel);
    list.appendChild(editField);
  });

  var deleteImage = document.createElement("img");
  deleteImage.src = "./trash-solid.svg";
  deleteImage.addEventListener("click", () => {
    listBase.removeChild(list);
    storageDelete(content);
  });

  list.addEventListener("click", () => {
    if (!status) list.style.backgroundColor = "#858585";
    else list.style.backgroundColor = "#b2b2b2";
    status = !status;
  });

  list.addEventListener("mouseover", () => {
    if (!status) list.style.backgroundColor = "#b2b2b2";
  });

  list.addEventListener("mouseleave", () => {
    if (!status) list.style.backgroundColor = "#ffffff";
  });

  list.innerText = content;
  list.append(editImage, deleteImage, document.createElement("br"));
  listBase.appendChild(list);
};

addAction.addEventListener("click", () => {
  if (todoField.value === "") {
    alert("추가할 수 없습니다");
    return;
  }
  if (todoStorage.indexOf(todoField.value) !== -1) {
    alert("이미 존재하는 항목입니다");
    return;
  }
  storageNew(todoField.value);
  newTodo(todoField.value);
  todoField.value = "";
});

if (localStorage.getItem("todo") !== null) {
  todoStorage = JSON.parse(localStorage.getItem("todo"));
  todoStorage.forEach((e) => {
    newTodo(e);
  });
} else {
  todoStorage = [];
}
