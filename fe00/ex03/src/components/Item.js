import React, {Component} from 'react';
import './Item.css';

class Item extends Component{
    render(){
        const {text} = this.props;
        return (
            <div className='item' >
                <div className='todo-text'>
                    <div>{text}</div>
                </div>
                <div className='remove'>&times;</div>
            </div>
        );
    }
}

export default Item;