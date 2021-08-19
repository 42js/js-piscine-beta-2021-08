import React, { Component } from "react";
import { ReactComponent as DeleteIcon } from "./icon-delete.svg";

export default class Item extends Component {
  render() {
    const { id, value, checked, onToggle, onDelete } = this.props;
    return (
      <div>
        <li
          className={checked ? "doing" : "done"}
          onClick={(e) => {
            e.stopPropagation();
            onToggle(id);
          }}
        >
          <span>{value}</span>
          <span className="deleteButton" onClick={() => onDelete()}>
            <DeleteIcon />
          </span>
        </li>
      </div>
    );
  }
}
