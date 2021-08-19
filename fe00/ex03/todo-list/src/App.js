import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Input from './components/Input';
import ItemList from './components/ItemList';

class App extends Component {
  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 공부', checked: false },
      { id: 1, text: 'Node.js 공부', checked: false },
      { id: 2, text: '치킨 먹기', checked: true },
    ],
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  render() {
    const { input } = this.state;
    const { handleChange, handleCreate, handleKeyPress } = this;
    return (
      <TodoListTemplate
        form={
          <Input
            value={input}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
          />
        }
      >
        <ItemList todos={this.state.todos} />
      </TodoListTemplate>
    );
  }
}

export default App;
