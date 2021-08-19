import '../css/ToDoListTemplate.css'
import React from 'react';
class ToDoListTemplate extends React.Component {
  render() {
    const { input, clock, children } = this.props;
    return(
    <div className="todo-list-template">
      {clock}
      <section className="title">
        ToDoList
      </section>
      <section className="input-wrapper">
        {input}
      </section>
      <section className="itemlist-wrapper">
        {children}
      </section>
    </div>
    );
  }
}
export default ToDoListTemplate;