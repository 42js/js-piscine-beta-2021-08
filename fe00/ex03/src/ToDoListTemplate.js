import React from 'react';
import Input from './Input';
import './ToDoListTemplate.css';

const ToDoListTemplate = () => {
	return (
		<div className="Template">
			<div className="title">To do List</div>
			<div className="content">
				<section>
					<Input />
				</section>
			</div>
		</div>
	);
}

export default ToDoListTemplate;
