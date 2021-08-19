import React, { Component } from "react";
import { ReactComponent as DeleteIcon } from "./icon-delete.svg";

export default class Item extends Component {
  render() {
    return (
      <div>
        <li>
          <span>{this.props.value}</span>
          <DeleteIcon />
        </li>
      </div>
    );
  }
}
