import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({input, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        TodoList
      </div>
      <section className="input-wrapper">
        { input }
      </section>
      <section className="itemlist-wrapper">
        { children }
      </section>
    </main>
  );
};


export default TodoListTemplate;
