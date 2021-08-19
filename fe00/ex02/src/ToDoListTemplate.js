import React, { Component } from "react";
import "./ToDoListTemplate.css";
import ItemList from "./ItemList";
import Input from "./Input";

export default class ToDoListTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      items: [],
    };
  }

  getInputValue = (value) => {
    this.state.items.push(value);
    this.setState({
      inputValue: value,
      items: this.state.items,
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>To Do List</h1>
        </header>
        <main>
          <section className="inputSection">
            <Input getInputValue={this.getInputValue} />
          </section>
          <section className="listSection">
            <ItemList items={this.state.items} />
          </section>
        </main>
      </div>
    );
  }
}
