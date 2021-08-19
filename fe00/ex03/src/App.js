import React, { Component } from 'react';
import './App.css';
import ItemList from './ItemList';
import ToDoListTemplate from './ToDoListTemplate';

class App extends Component {
	state = {
		input: '',
		todos: [],
	}

	onChangeInput = (e) => {
		this.setState({
			input: e.target.value
		});
	}
	onSubmit = (e) => {
		const { input, todos } = this.state;
		e.preventDefault();
		const newTodo = {
			id: Date.now(),
			text: input,
		};
		this.setState({
			input: '',
			todos: todos.concat(newTodo)
		})
	}

	render () {
		return (
			<div className="app">
				<ToDoListTemplate onChangeInput={this.onChangeInput} input={this.state.input} onSubmit={this.onSubmit} />
				<ItemList todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
