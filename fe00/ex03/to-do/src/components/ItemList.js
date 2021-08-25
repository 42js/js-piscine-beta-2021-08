import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
    render(){
        const {todos} = this.props;
        const todoList = todos.map(
            ({id,text,checked})=>(
                <Item 
                    id={id}
                    text={text}
                    checked={checked}
                    key={id}
                />
        ));
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default ItemList;
