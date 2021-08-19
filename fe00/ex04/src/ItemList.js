import React, { Component } from "react";
import Item from "./Item.js";
import "./Item.css";

export default class ItemList extends Component {
  render() {
    const { items, onToggle, onDelete } = this.props;

    return (
      <div>
        {items.map(({ id, value, checked }) => (
          <Item
            key={id}
            id={id}
            value={value}
            checked={checked}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}
