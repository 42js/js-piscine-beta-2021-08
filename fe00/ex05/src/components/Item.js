import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className={`todo-item ${checked && 'selected'}`} onClick={() => onToggle(id)}>
        {
          checked && (<div className="check-mark">✓</div>)
        }
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        <div className="remove-item" onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}>&times;</div>
      </div>
    );
  }
};

export default Item;