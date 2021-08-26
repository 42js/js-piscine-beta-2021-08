import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Input from './components/Input';
import ItemList from './components/ItemList';

class App extends Component {
  id = 3;
  state = {
      input: '',
      todo: [
        {id:0, text: '리액트 공부', checked: false},
        {id:1, text: 'Node.js 공부', checked: true},
        {id:2, text: '리애 먹기', checked: false},
      ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const {input, todo} = this.state;
    this.setState({
      input: '',
      todo: todo.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter')
      this.handleCreate();
  }

  render(){
    const {input} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <TodoListTemplate form={(
        <Input
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <ItemList todo={this.state.todo}/>
      </TodoListTemplate>
    );
  }
}

export default App;