import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form'
import TodoItemList from './components/TodoItemList';

class App extends Component {
	id = 3

	state = {
		input: '',
		todos: [
			{ id: 0, text: ' 리액트 소개', checked:false },
			{ id: 1, text: ' 리액트 소개', checked:true },
			{ id: 2, text: ' 리액트 소개', checked:false }
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
				checked: false
			})
		});
	}

	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.handleCreate();
		}
	}

	render() {
		const { input } = this.state;
		const {
			handleChange,
			handleCreate,
			handleKeyPress
		} = this;

		return (
		<TodoListTemplate form={(
			<Form
				value={input}
				onKeyPress= {handleKeyPress}
				onChange={handleChange}
				onCreate={handleCreate}
			/>
		)}>
			<TodoItemList todos={todos}/>
		</TodoListTemplate>
	   );
	}
}

export default App;
