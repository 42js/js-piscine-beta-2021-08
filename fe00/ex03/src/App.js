import React, { Component } from 'react';
import TodoListTemplate from './TodoListTemplate';
import Input from './Input';
import ItemList from './ItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: ' fe00', checked: false },
      { id: 1, text: ' is', checked: true },
      { id: 2, text: ' way harder than i think', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }



  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <TodoListTemplate input={(

        <Input
          value ={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
       )}>
        <ItemList todos={todos}/>
      </TodoListTemplate>
    );
  }
}

export default App;
