const todoStorage = [];

var addAction = document.querySelector("input[name=add]");
var todoField = document.querySelector("input[name=todo]");
var listBase = document.querySelector("section");

const newTodo = (content) => {
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
      list.innerText = editTodoField.value;
      list.append(editImage, deleteImage, document.createElement("br"));
      list.removeChild(editField);
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
  });

  list.addEventListener("mouseover", () => {
    list.style.backgroundColor = "#b2b2b2";
  });

  list.addEventListener("mouseleave", () => {
    list.style.backgroundColor = "#eaeaea";
  });

  list.innerText = content;
  list.append(editImage, deleteImage, document.createElement("br"));
  listBase.appendChild(list);
};

addAction.addEventListener("click", () => {
  newTodo(todoField.value);
});
