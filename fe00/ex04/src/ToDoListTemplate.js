import React, { Component } from "react";
import "./ToDoListTemplate.css";
import ItemList from "./ItemList";
import Input from "./Input";

export default class ToDoListTemplate extends Component {
  render() {
    const { inputValue, items, onInputChange, onKeyPress, onAddButtonClick } =
      this.props;

    return (
      <div>
        <header>
          <h1>To Do List</h1>
        </header>
        <main>
          <section className="inputSection">
            <Input
              inputValue={inputValue}
              onInputChange={onInputChange}
              onKeyPress={onKeyPress}
              onAddButtonClick={onAddButtonClick}
            />
          </section>
          <section className="listSection">
            <ItemList items={items} />
          </section>
        </main>
      </div>
    );
  }
}
