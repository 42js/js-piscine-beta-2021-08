import React, { Component } from 'react';
import './Input.css';

class InputOnClick extends Component {
  state = {
    value: ''
  }

  handleClick = () => {
    console.log(this.state.value);
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    const { value } = this.state;
    const { handleClick, handleChange } = this;
    return (
      <form>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <span
        className="button"
        onClick={handleClick}
        onChange={(e)=>{}}
      >Click</span>
    </form>
    )
  }
}

export default InputOnClick;