import React, { Component } from 'react';
import './item.css';

export class ItemList extends Component {
  render() {
//    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
          <Items text="hihi"></Items>
          <Items text="hello"></Items>
          <Items text="world"></Items>
      </div>
    );
  }
}

export class Items extends Component {
    render() {
      const { text, checked, /*id, onToggle, onRemove*/ } = this.props;
  
      return (
        <div className="todo-item" onClick={() => /*onToggle(id)*/null }>
          <div className="remove" onClick={(e) => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            console.log(e);
//            onRemove(id);
        }
          }>&times;</div>
          <div className={`todo-text ${checked && 'checked'}`}>
            <div>{text}</div>
          </div>
          {
            checked && (<div className="check-mark">✓</div>)
          }
        </div>
      );
    }
}