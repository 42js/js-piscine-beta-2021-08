import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
	render() {
		return (
			<div className="Item">
				<div className="text" name="text">리액트 공부</div>
				<button className="remove">X</button>
			</div>
		);
	}
}

export default Item;
