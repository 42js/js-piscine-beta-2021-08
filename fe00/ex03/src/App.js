import { Component } from "react";
import ToDoList from "./ToDoListTemplate";
import Input from "./Input";

class App extends Component {
    id = 1;
    state = {
        input: "",
        todos: [{ id: 0, text: "할 일", checked: false }],
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
    render() {
        const { input, todos } = this.state;
        const { handleAddInput, handleKeyPress, handleChange } = this;
        return (
            <div className="App">
                <ToDoList
                    todos={todos}
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
