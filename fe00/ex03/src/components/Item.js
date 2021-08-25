import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    return (
      <div className={`todo-item ${checked && 'selected'}`} onClick={() => onToggle(id)}>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        <div className="remove-item" onclick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}>&times;</div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
};

export default Item;