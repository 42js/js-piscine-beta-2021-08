import React, { memo } from 'react';
import Input from './Input';
import './ToDoListTemplate.css';

const ToDoListTemplate = memo(({ onChangeInput, input, onSubmit }) => {
	return (
		<div className="Template">
			<div className="title">To do List</div>
			<div className="content">
				<section>
					<Input onChangeInput={onChangeInput} input={input} onSubmit={onSubmit} />
				</section>
			</div>
		</div>
	);
})

export default ToDoListTemplate;
