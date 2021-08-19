import React, { Component } from 'react';
import Item from './Item';
import './ItemList.css';

class ItemList extends Component {
	render() {
		return (
			<div className="List">
				<Item />
				<Item />
				<Item />
			</div>
		);
	}
}

export default ItemList;
