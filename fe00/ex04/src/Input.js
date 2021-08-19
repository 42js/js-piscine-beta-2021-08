import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  render() {
    const { inputValue, onInputChange, onKeyPress, onAddButtonClick } =
      this.props;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={onKeyPress}
        ></input>
        <button type="button" className="addButton" onClick={onAddButtonClick}>
          ADD
        </button>
      </div>
    );
  }
}
