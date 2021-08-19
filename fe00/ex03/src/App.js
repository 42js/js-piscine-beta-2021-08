import React from 'react';
import './App.css';
import ItemList from './ItemList';
import ToDoListTemplate from './ToDoListTemplate';

function App() {
	return (
		<div className="app">
			<ToDoListTemplate />
			<ItemList />
		</div>
	);
}

export default App;
