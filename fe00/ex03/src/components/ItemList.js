import React, {Component} from 'react';
import Item from './Item';

class ItemList extends Component{
    render(){
        const { todo } = this.props;
        const todoList = todo.map(
            ({id, text, checked}) => (
                <Item
                    id={id}
                    text={text}
                    checked={checked}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default ItemList;