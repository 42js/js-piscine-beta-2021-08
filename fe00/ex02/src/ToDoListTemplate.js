import React, { Component } from "react";
import "./ToDoListTemplate.css";
import ItemList from "./ItemList";
import Input from "./Input";

export default class ToDoListTemplate extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>To Do List</h1>
        </header>
        <main>
          <section className="inputSection">
            <Input
              value={this.props.inputValue}
              getInputValue={this.props.getInputValue}
              onAddButtonClick={this.props.handleAddButtonClick}
            />
          </section>
          <section className="listSection">
            <ItemList items={this.props.items} />
          </section>
        </main>
      </div>
    );
  }
}
