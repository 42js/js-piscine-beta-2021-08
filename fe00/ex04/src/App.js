import { Component } from "react";
import ItemList from "./ItemList";
import ToDoList from "./ToDoListTemplate";
import Input from "./Input";

class App extends Component {
    id = 1;
    state = {
        input: "",
        todos: [{ id: 0, text: "할 일", checked: false }],
    };
    handleCheck = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.map((item) => {
                if (item.id === id) item.checked = item.checked ? false : true;
                return item;
            }),
        });
    };
    handleAddInput = (e) => {
        const { input, todos } = this.state;
        this.setState({
            input: "",
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
            }),
        });
    };
    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleAddInput();
        }
    };
    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        });
    };
    handleClickRm = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter((item) => item.id !== id),
        });
    };
    render() {
        const { input, todos } = this.state;
        const {
            handleAddInput,
            handleKeyPress,
            handleChange,
            handleCheck,
            handleClickRm,
        } = this;
        return (
            <div className="App">
                <ToDoList
                    todos={todos}
                    ItemList={
                        <ItemList
                            todos={todos}
                            onClickRm={handleClickRm}
                            onClickCheck={handleCheck}
                        />
                    }
                    Input={
                        <Input
                            value={input}
                            onClick={handleAddInput}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                        />
                    }
                />
            </div>
        );
    }
}

export default App;
