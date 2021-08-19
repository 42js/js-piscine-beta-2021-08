import React, { Component } from "react";
import "./App.css";
import ToDoListTemplate from "./ToDoListTemplate";

class App extends Component {
  constructor(props) {
    super(props);
    this.id = 0;
    this.state = {
      input: "",
      todoList: [{}],
    };
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  AddTodo = () => {
    const { input, todoList } = this.state;
    this.setState({
      todoList: todoList.concat({
        id: this.id++,
        value: input,
        checked: false,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") this.AddTodo();
  };

  handleToggle = (id) => {
    const { todoList } = this.state;

    const index = todoList.findIndex((todo) => todo.id === id);
    const copiedTodoList = [...todoList];
    copiedTodoList[index] = {
      ...todoList[index],
      checked: !todoList[index].checked,
    };

    this.setState({ todoList: copiedTodoList });
  };

  render() {
    const { input, todoList } = this.state;
    return (
      <div className="App">
        <ToDoListTemplate
          inputValue={input}
          items={todoList}
          onInputChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          onAddButtonClick={this.AddTodo}
          onToggle={this.handleToggle}
        />
      </div>
    );
  }
}

export default App;
