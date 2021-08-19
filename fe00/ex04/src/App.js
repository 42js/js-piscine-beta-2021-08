import React from 'react'
import ToDoListTemplate from './component/ToDoListTemplate';
import Input from './component/Input';
import ItemList from './component/ItemList';
import Clock from './component/Clock';
class App extends React.Component{
  id = 1;

  state = {
    input: '',
    todos: [
      {id:0, text: '똥싸기', time: '', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        time: '',
        checked: false
      })
    });
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const { todos } = this.state

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
      time: new Date().toLocaleTimeString()
    };

    this.setState({
      todos: nextTodos
    });
  }
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render(){
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

  return (
    <ToDoListTemplate input={(
      <Input 
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />
    )} clock = {<Clock />}>
      <ItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
    </ToDoListTemplate>
    );
  }
}

export default App;
