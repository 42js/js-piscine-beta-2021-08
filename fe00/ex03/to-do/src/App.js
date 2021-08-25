import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import InputForm from './components/Input';
import ItemList from './components/ItemList';

class App extends Component {

  id = 3;

  state = {
    input: '',
    todos: [
      {id : 0, text: '소개', checked: false},
      {id : 1, text: '설명', checked: true},
      {id : 2, text: '추가설명', checked: false}
    ]
   };
  
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleCreate = ()=>{
    const {input, todos} = this.state;
    this.setState({
      input:'',
      todos: todos.concat({
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

  render() {
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
       <TodoListTemplate form={(<InputForm value={input} 
                                    onKeyPress={handleKeyPress} 
                                    onChange={handleChange} 
                                    onCreate={handleCreate} />)}>
         <ItemList todos={todos}/>
       </TodoListTemplate>
    );
  }
}

export default App;
