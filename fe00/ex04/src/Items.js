import React, { Component } from 'react';
import './Items.css';

class Items extends Component {
	render() {
		const { todo } = this.props;

		return (
			<div className="Item">
				<div className="text" name="text">{todo.text}</div>
				<button className="remove">X</button>
			</div>
		);
	}
}

export default Items;
