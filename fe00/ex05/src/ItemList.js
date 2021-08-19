import React, { Component } from 'react';
import Items from './Items';
import './ItemList.css';

class ItemList extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.todos !== nextProps.todos;
	}

	render() {
		const { todos, onRemove, onToggle } = this.props;

		return (
			<div className="List">
				{todos.map((todo) =>
					<Items
						key={todo.id}
						id={todo.id}
						checked={todo.checked}
						text={todo.text}
						onRemove={onRemove}
						onToggle={onToggle}
					/>)
				}
			</div>
		);
	}
}

export default ItemList;
