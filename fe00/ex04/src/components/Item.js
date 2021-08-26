import React, {Component} from 'react';
import './Item.css';

class Item extends Component{
    render(){
        const {text, checked, id, onToggle, onRemove} = this.props;
        return (
            <div className='item' onClick={()=>onToggle(id)}>
                {checked && (<div className='check-mark'>&#x2713;</div>)}
                <div className={`todo-text ${checked ? ' checked' : ''}`}>
                    <div>{text}</div>
                </div>
                <div className='remove' onClick={(e) => {
                  e.stopPropagation();
                  onRemove(id);}
                }>&times;</div>
            </div>
        );
    }
}

export default Item;