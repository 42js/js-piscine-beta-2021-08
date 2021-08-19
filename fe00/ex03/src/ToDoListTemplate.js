import "./ToDoListTemplate.css";
import ItemList from "./ItemList";
import { Component } from "react";

class ToDoList extends Component {
    render() {
        const { Input, todos } = this.props;
        return (
            <div className="Todo">
                <h1>ToDoList</h1>
                {Input}
                <ItemList todos={todos} />
            </div>
        );
    }
}

export default ToDoList;
