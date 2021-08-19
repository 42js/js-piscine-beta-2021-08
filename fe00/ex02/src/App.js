import React, { Component } from 'react';
import TodoListTemplate from './ToDoListTemplate';
import Input from './input';
import { ItemList } from './item';

class App extends Component {
  render() {
    return (
    	<TodoListTemplate form={<Input/>}>
    		<ItemList></ItemList>
      	</TodoListTemplate>
    );
  }
}

export default App;