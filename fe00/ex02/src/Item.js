import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    return (
      <div className="to-do-item">
        <div className="to-do-name">{this.props.children}</div>
        <div className="to-do-remove">×</div>
      </div>
    );
  }
}

export default Item;
