import React, { Component } from 'react';
import TodoListTemplate from './TodoListTemplate';
import Input from './Input';
import ItemList from './ItemList';

class App extends Component {
  render() {
    return (
      <TodoListTemplate input={<Input />}>
        <ItemList />
      </TodoListTemplate>
    );
  }
}

export default App;
