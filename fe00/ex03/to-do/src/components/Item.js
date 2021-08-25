import React, {Component} from 'react';
import './Item.css'

class Item extends Component {
    render() {
        const {text, checked, id} = this.props;

        return (
            <div className="todo-item">
 
                <div className={`todo-text ${checked && 'checked'}`}> 
                        <div>{text}</div>
                </div>
                {
                   checked && (<div className="check-mark"></div>)
                }
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation();
                }}>&times;</div>
                </div>
        );
    }
}
export default Item;
