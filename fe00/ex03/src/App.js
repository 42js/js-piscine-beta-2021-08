import React, { Component } from "react";
import "./App.css";
import ToDoListTemplate from "./ToDoListTemplate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todoList: [],
    };
  }

  getInputValue = (value) => {
    this.setState({ value: value });
  };

  AddTodo = () => {
    this.state.todoList.push(this.state.value);
    this.setState({
      todoList: this.state.todoList,
    });
  };

  render() {
    return (
      <div className="App">
        <ToDoListTemplate
          inputValue={this.state.value}
          getInputValue={this.getInputValue}
          handleAddButtonClick={this.AddTodo}
          items={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
