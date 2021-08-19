import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  handleInputChange = (e) => {
    this.props.getInputValue(e.target.value);
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") this.props.onAddButtonClick();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.inputValue}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
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
