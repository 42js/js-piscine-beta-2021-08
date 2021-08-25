import React from "react";
import './ToDoListTemplate.css';

const ToDoListTemplate = ({input, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        ToDoList
      </div>
      <section className="form-wrapper">
        {input}
      </section>
      <section className="todos-wrapper">
        {children}
      </section>
    </main>
  );
}

export default ToDoListTemplate;