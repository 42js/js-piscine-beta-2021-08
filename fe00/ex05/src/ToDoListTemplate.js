import "./ToDoListTemplate.css";
import { Component } from "react";

class ToDoList extends Component {
    render() {
        const { Input, ItemList } = this.props;
        return (
            <div className="Todo">
                <h1>ToDoList</h1>
                {Input}
                {ItemList}
            </div>
        );
    }
}

export default ToDoList;
