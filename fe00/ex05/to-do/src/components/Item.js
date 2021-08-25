import React, {Component} from 'react';
import './Item.css'

class Item extends Component {
  
    shouldComponentUpdate(nextProps,nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render() {
        const {text, checked, id, onToggle, onRemove} = this.props;
       console.log(id);
        return (
            <div className="todo-item" onClick={()=>onToggle(id)}>
 
                <div className={`todo-text ${checked && 'checked'}`}> 
                        <div>{text}</div>
                </div>
                {
                   checked && (<div className="check-mark">✔️</div>)
                }
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation();
                    onRemove(id);
                }}>&times;</div>
                </div>
        );
    }
}
export default Item;