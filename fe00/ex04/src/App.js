import React, { Component } from "react";
import "./App.css";
import ToDoListTemplate from "./ToDoListTemplate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todoList: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  AddTodo = () => {
    const { input, todoList } = this.state;
    this.setState({
      todoList: todoList.concat(input),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") this.AddTodo();
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
        />
      </div>
    );
  }
}

export default App;
