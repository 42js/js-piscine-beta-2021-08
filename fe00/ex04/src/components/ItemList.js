import React, {Component} from 'react';
import Item from './Item';

class ItemList extends Component{
    render(){
        const { todo, onToggle, onRemove } = this.props;
        const todoList = todo.map(
            ({id, text, checked}) => (
                <Item
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
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