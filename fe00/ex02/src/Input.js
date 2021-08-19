import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  handleInputChange = (e) => {
    this.props.getInputValue(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.inputValue}
          onChange={this.handleInputChange}
        ></input>
        <button
          type="button"
          className="addButton"
          onClick={this.props.onAddButtonClick}
        >
          ADD
        </button>
      </div>
    );
  }
}
