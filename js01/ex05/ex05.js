const inputTodo = document.querySelector("input.input-todo");
const todoForm = document.querySelector(".todo");
const main = document.querySelector("main");
const delBtns = document.getElementsByClassName("del");
const editBtns = document.getElementsByClassName("edit");

if (localStorage.length === 0) {
    localStorage.setItem("idx", "0");
}

todoForm.onsubmit = function (e) {
    localStorage.setItem(
        localStorage.getItem("idx"),
        JSON.stringify({
            done: false,
            value: inputTodo.value,
        })
    );
    localStorage.setItem(
        "idx",
        String(parseInt(localStorage.getItem("idx")) + 1)
    );
};

function makeSection(value, done, id) {
    const section = document.createElement("section");
    const input = document.createElement("input");
    const div = document.createElement("div");

    const edit = document.createElement("button");
    const del = document.createElement("button");

    if (done) {
        section.setAttribute("class", "section done");
    } else {
        section.setAttribute("class", "section");
    }
    input.setAttribute("type", "text");
    input.setAttribute("disabled", "true");
    input.setAttribute("value", value);
    input.setAttribute("data-id", id);
    input.setAttribute("class", "todolist");
    del.setAttribute("data-id", id);
    edit.setAttribute("data-id", id);

    div.setAttribute("class", "card__btns");
    edit.setAttribute("class", "btn card__btns__btn edit");
    del.setAttribute("class", "btn card__btns__btn del");

    edit.innerText = "edit";
    del.innerText = "del";
    div.append(edit, del);
    section.append(input, div);
    return section;
}
//inputBtn.onclick = function (event) };

for (const key in localStorage) {
    if (localStorage.hasOwnProperty.call(localStorage, key)) {
        if (key !== "idx") {
            const item = JSON.parse(localStorage.getItem(key));
            main.appendChild(makeSection(item.value, item.done, key));
        }
    }
}

for (const btn of delBtns) {
    btn.addEventListener("click", (e) => {
        localStorage.removeItem(e.target.dataset.id);
        location.reload();
    });
}

for (const btn of editBtns) {
    btn.addEventListener("click", (e) => {
        let editinput = e.target.parentElement.previousElementSibling;
        let editSection = editinput.parentElement;
        const dataId = editinput.dataset.id;
        const originValue = JSON.parse(localStorage.getItem(dataId));

        if (editinput.disabled === true) {
            editSection.style.backgroundColor = "white";
            editinput.disabled = false;
            editinput.focus();
        } else {
            editSection.style.backgroundColor = "inherit";
            editinput.disabled = true;
            localStorage.setItem(
                dataId,
                JSON.stringify({
                    done: originValue.done,
                    value: editinput.value,
                })
            );
            location.reload();
        }
    });
}

const todoList = document.getElementsByClassName("section");

for (const list of todoList) {
    list.addEventListener("click", (e) => {
        if (
            e.target !== e.currentTarget &&
            e.target !== e.currentTarget.firstElementChild
        )
            return;

        const dataId = e.currentTarget.firstElementChild.dataset.id;
        const originValue = JSON.parse(localStorage.getItem(dataId));

        if (!originValue.done) {
            localStorage.setItem(
                dataId,
                JSON.stringify({
                    done: true,
                    value: originValue.value,
                })
            );
        } else {
            localStorage.setItem(
                dataId,
                JSON.stringify({
                    done: false,
                    value: originValue.value,
                })
            );
        }
        location.reload();
        e.stopPropagation();
    });
}
