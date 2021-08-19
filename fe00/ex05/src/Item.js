import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;


    console.log(id);
    return (
      <div className="item" onClick={() => onToggle(id)}>
        {
          checked && (<div className="check-mark">✓</div>)
        }
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        <div className={`text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>

      </div>
    );
  }
}

export default Item;
