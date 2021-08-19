import React, { Component } from "react";

class App extends Component {
	render() {
		return (
			<main className="todo-list-template">
				<div className="title">To-Do List</div>
				<section className="form-wrapper">Input</section>
				<section className="todos-wrapper">List</section>
			</main>
		);
	}
}

export default App;