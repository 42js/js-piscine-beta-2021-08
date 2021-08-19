import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = () => {
    return (
        <main className="todo-list-template">
        <div className="title">
            To-Do List
        </div>
        <section className="form-wrapper">
            Input
        </section>
        <section className="todos-wrapper">
            List
        </section>
        </main>
    );
};

export default TodoListTemplate;