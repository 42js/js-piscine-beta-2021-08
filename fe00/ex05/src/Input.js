import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
	shouldComponentUpdate(nextProps, nextState) {
			return this.props.input !== nextProps.input;
		}

	render() {
		const { onChangeInput, input, onSubmit } = this.props;

		return (
			<div className="Insert" onSubmit={onSubmit} >
				<form className="form">
					<input className="todo" placeholder="할 일을 입력하세요." autoComplete="off" onChange={onChangeInput} value={input} required />
					<button className="add">ADD</button>
				</form>
			</div>
		)
	}
}

export default Input;
