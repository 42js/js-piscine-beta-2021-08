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
			checked: false,
		};
		this.setState({
			input: '',
			todos: todos.concat(newTodo)
		})
	}
	onRemove = (id) => {
		this.setState({
			todos: (this.state.todos.filter(todo => todo.id !== id))
		})
	}
	onToggle = (id) => {
		this.setState({
			todos: (this.state.todos.map(todo =>
				id === todo.id ? {...todo, checked: !todo.checked} : todo
			))
		})
	}

	render () {
		return (
			<div className="app">
				<ToDoListTemplate onChangeInput={this.onChangeInput} input={this.state.input} onSubmit={this.onSubmit} />
				<ItemList todos={this.state.todos} onRemove={this.onRemove} onToggle={this.onToggle} />
			</div>
		);
	}
}

export default App;
