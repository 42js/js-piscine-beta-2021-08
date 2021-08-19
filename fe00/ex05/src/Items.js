import React, { Component } from 'react';
import './Items.css';

class Items extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.checked !== nextProps.checked;
	}

	render() {
		const { checked, id, text, onRemove, onToggle } = this.props;

		return (
			<div className="Item">
				{checked ? <div className="checkBox">✓</div> : false}
				<div className={"text" + (checked ? ' checkText' : '')} onClick={() => onToggle(id)} name="text">{text}</div>
				<button className="remove" onClick={() => onRemove(id)} >X</button>
			</div>
		);
	}
}

export default Items;
