import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
	render() {
		return (
			<div className="Insert">
				<section className="section-input">
					<input className="todo" placeholder="할 일을 입력하세요." autoComplete="off" required/>
				</section>
				<section className="section-button">
					<button>ADD</button>
				</section>
			</div>
		)
	}
}

export default Input;
