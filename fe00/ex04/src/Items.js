import React, { Component } from 'react';
import './Items.css';

class Items extends Component {
	render() {
		const { todo, onRemove, onToggle } = this.props;

		return (
			<div className="Item">
				{todo.checked ? <div className="checkBox">✓</div> : false}
				<div className={"text" + (todo.checked ? ' checkText' : '')} onClick={() => onToggle(todo.id)} name="text">{todo.text}</div>
				<button className="remove" onClick={() => onRemove(todo.id)} >X</button>
			</div>
		);
	}
}

export default Items;
