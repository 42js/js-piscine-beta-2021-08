import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import ToDoListTemplate from './ToDoListTemplate';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	const onChangeInput = (e) => {
		setInput(e.target.value);
	}
	const onSubmit = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Date.now(),
			text: input,
			checked: false,
		};
		setInput('');
		setTodos(todos.concat(newTodo));
	}
	const onRemove = (id) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}
	const onToggle = (id) => {
		setTodos(todos.map(todo =>
			id === todo.id ? {...todo, checked: !todo.checked} : todo
		))
	}

	return (
		<div className="app">
			<ToDoListTemplate onChangeInput={onChangeInput} input={input} onSubmit={onSubmit} />
			<ItemList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</div>
	);
}

export default App;
