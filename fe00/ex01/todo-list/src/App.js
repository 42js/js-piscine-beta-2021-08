import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
  render() {
    return (
      <TodoListTemplate
        form="입력할 부분"
        children="할일 리스트 부분"
      ></TodoListTemplate>
    );
  }
}

export default App;
