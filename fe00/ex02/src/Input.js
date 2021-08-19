import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleAddButtonClick = () => {
    this.props.getInputValue(this.state.value);
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        ></input>
        <button
          type="button"
          className="addButton"
          onClick={this.handleAddButtonClick}
        >
          ADD
        </button>
      </div>
    );
  }
}
