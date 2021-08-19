import React, { Component } from "react";
import Item from "./Item.js";
import "./Item.css";

export default class ItemList extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <Item key={index} value={item} />
        ))}
      </div>
    );
  }
}
