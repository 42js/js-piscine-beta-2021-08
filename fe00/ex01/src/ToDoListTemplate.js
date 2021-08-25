import React from "react";
import './ToDoListTemplate.css';

const ToDoListTemplate = ({children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        ToDoList
      </div>
      <section className="form-wrapper">
        입력 할 부분
      </section>
      <section className="todos-wrapper">
        {children}
      </section>
    </main>
  );
}

export default ToDoListTemplate;