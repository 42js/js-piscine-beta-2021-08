import React, { Component } from 'react';
import TodoListTemplate from './ToDoListTemplate';

class App extends Component {
  render() {
    return (
      <TodoListTemplate>
        입력한 ToDoList 나타날 부분
      </TodoListTemplate>
    );
  }
}

export default App;