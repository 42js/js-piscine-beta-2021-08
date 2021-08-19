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
		};
		setInput('');
		setTodos(todos.concat(newTodo));
	}

	return (
		<div className="app">
			<ToDoListTemplate onChangeInput={onChangeInput} input={input} onSubmit={onSubmit} />
			<ItemList todos={todos} />
		</div>
	);
}

export default App;
