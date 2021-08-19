import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Input from './components/Input';
import ItemList from './components/ItemList';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Input />}>
        <ItemList />
      </TodoListTemplate>
    );
  }
}

export default App;
