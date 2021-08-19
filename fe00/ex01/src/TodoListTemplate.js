import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        TodoList
      </div>
      <section className="form-wrapper">
        입력할 부분
        {form}
      </section>
      <section className="todos-wrapper">
        할일 리스트 부분
        { children }
      </section>
    </main>
  );
};


export default TodoListTemplate;
