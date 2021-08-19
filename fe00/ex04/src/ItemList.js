import React, { Component } from 'react';
import Items from './Items';
import './ItemList.css';

class ItemList extends Component {
	render() {
		const { todos, onRemove, onToggle } = this.props;

		return (
			<div className="List">
				{todos.map((todo) =>
					<Items
						key={todo.id}
						todo={todo}
						onRemove={onRemove}
						onToggle={onToggle}
					/>)
				}
			</div>
		);
	}
}

export default ItemList;
