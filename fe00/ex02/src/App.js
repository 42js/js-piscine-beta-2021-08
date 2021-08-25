import React, { Component } from 'react';
import ToDoListTemplate from './ToDoListTemplate';
import Input from './Input';
import ItemList from './ItemList';

class App extends Component {
  render() {
    return (
      <ToDoListTemplate input={<Input/>}>
        <ItemList/>
      </ToDoListTemplate>
    );
  }
}

export default App;
