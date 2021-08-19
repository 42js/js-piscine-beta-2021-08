import React from 'react';
import './ToDoListTemplate.css';

const ToDoListTemplate = () => {
	return (
		<div className="Template">
			<div className="title">To do List</div>
			<div className="content">
				<section className="Insert">입력할 부분</section>
				<section className="List">할 일 리스트 부분</section>
			</div>
		</div>
	);
}

export default ToDoListTemplate;
