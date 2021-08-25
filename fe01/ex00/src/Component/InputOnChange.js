import React, { Component } from 'react';
import './Input.css';

class InputOnChange extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
    console.log(e.target.value);
  }

  render() {
    const { value } = this.state;
    const { handleChange } = this;
    return (
      <form>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
    )
  }
}

export default InputOnChange;