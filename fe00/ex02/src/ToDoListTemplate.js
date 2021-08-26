import React, { Component } from "react";
import Input from "./Input";
import ItemList from "./ItemList";
import "./ToDoListTemplate.css";

class ToDoList extends Component {
  render() {
    return (
      <div className="to-do">
        <div className="to-do-title">To do . . .</div>
        <section className="to-do-input-template">
          <Input></Input>
        </section>
        <section className="to-do-list-template">
          <ItemList></ItemList>
        </section>
      </div>
    );
  }
}

export default ToDoList;
