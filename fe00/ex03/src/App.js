import React, { Component } from 'react';
import ToDoListTemplate from './ToDoListTemplate';
import Input from './Input';
import ItemList from './ItemList';


class App extends Component {

  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, text: 'one', checked: true },
      { id: 1, text: 'two', checked: false },
      { id: 2, text: 'three', checked: false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      })
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
    } = this;
    return (
      <ToDoListTemplate form={(
        <Input
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <ItemList todos={todos}/>
      </ToDoListTemplate>
    );
  }
};

export default App;