import "./ToDoListTemplate.css";
import Input from "./Input";
import ItemList from "./ItemList";

function ToDoList() {
    return (
        <div className="Todo">
            <h1>ToDoList</h1>
            <Input />
            <ItemList />
        </div>
    );
}

export default ToDoList;
