import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    return (
        <main className='todolist'>
            <div className='title'>
                ToDoList
            </div>
            <section className='input'>
                {form}
            </section>
            <section className='content'>
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;