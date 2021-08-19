import React, { Component } from 'react';
import './Item.css';

// text: todo 내용
// checked: 체크박스 상태
class Item extends Component {
  render() {
    const { text, checked } = this.props;
    return (
      <div className="todo-item">
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        <div className="remove">&times;</div>
      </div>
    );
  }
}

export default Item;
